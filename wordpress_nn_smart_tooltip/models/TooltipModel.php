<?php

require_once plugin_dir_path(dirname(__FILE__)) . 'models/BaseModel.php';

class TooltipModel extends BaseModel
{
    /**
     * @return int
     */
    public function getId()
    {
        return (int) $this->model->id;
    }

    /**
     * @return int
     */
    public function getPostId()
    {
        return (int) $this->model->post_id;
    }

    /**
     * @return string
     */
    public function getTooltip()
    {
        return $this->model->tooltip;
    }

    /**
     * @return string
     */
    public function getPreparedTooltip()
    {
        return stripslashes($this->getTooltip());
    }
}
