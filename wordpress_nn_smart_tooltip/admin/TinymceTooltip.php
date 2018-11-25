<?php
require_once plugin_dir_path(dirname(__FILE__)) . 'mappers/TooltipMapper.php';

class TinymceTooltip
{
    /**
     * @param array $pluginSettings
     *
     * @return mixed
     */
    public function addTooltipButtonToPanel($pluginSettings)
    {
        $pluginSettings['nn_smart_tooltip'] = plugins_url('../assets/admin.bundle.js', __FILE__);

        return $pluginSettings;
    }

    /**
     * @param array $buttons
     *
     * @return array
     */
    public function registerTooltipButton($buttons)
    {
        $buttons[] = 'nn_smart_tooltip';

        return $buttons;
    }

    public function addStyles($mceCss)
    {
        $mceCss .= ', ' . plugins_url( '../assets/adminTinymce.css', __FILE__ );
        return $mceCss;
    }

    /**
     * Save tooltip to database, by clicking save button in popup
     */
    public function ajaxSaveTooltip()
    {
        header('Content-type:application/json');
        $id = isset($_POST['postId']) ? (int) $_POST['postId'] : null;
        if ($id) {
            /** @var TooltipMapper $mapper */
            $mapper = TooltipMapper::getInstance();
            $insertedId = $mapper->insert([
                'post_id' => $id,
                'tooltip' => $_POST['tooltip'],
            ]);

            if ($insertedId) {
                echo json_encode(['success' => true, 'insertedId' => $insertedId]);
                die();
            }
        }

        echo json_encode(['success' => false]);
        die();
    }

    /**
     * Get tooltip by id by licking tooltip icon, when cursor already on tooltip
     */
    public function ajaxGetTooltipById()
    {
        header('Content-type:application/json');
        $id = isset($_POST['id']) ? (int) $_POST['id'] : null;

        if ($id) {
            /** @var TooltipMapper $mapper */
            $mapper = TooltipMapper::getInstance();
            /** @var TooltipModel $model */
            $model = $mapper->getById($id);
            if ($model) {
                echo json_encode(['success' => true, 'data' => [
                    'tooltip' => $model->getPreparedTooltip()
                ]]);

                die();
            }
        }

        echo json_encode(['success' => false]);
        die();
    }

    /**1
     * Update tooltip
     */
    public function ajaxUpdateTooltip()
    {
        header('Content-type:application/json');
        $id = isset($_POST['id']) ? (int) $_POST['id'] : null;

        if ($id && isset($_POST['tooltip'])) {
            /** @var TooltipMapper $mapper */
            $mapper = TooltipMapper::getInstance();

            $mapper->update(
                ['tooltip' => $_POST['tooltip']],
                ['id' => $id]
            );

            echo json_encode(['success' => true]);
            die();
        }

        echo json_encode(['success' => false]);
        die();
    }
}
