<?php
require_once plugin_dir_path(dirname(__FILE__)) . 'mappers/TooltipMapper.php';

class FrontNnSmartTooltip
{
    /**
     * @param string $content
     *
     * @return string
     */
    public function addTooltips($content)
    {
        $ids = $this->getIdsFromText($content);
        if ($ids) {
            /** @var TooltipMapper $mapper */
            $mapper = TooltipMapper::getInstance();
            $tooltips = $mapper->getByIds($ids);

            if ($tooltips) {
                foreach ($tooltips as $tooltip) {
                    $content .= $this->getHtmlTooltip($tooltip);
                }
            }
        }

        return $content;
    }

    /**
     * @param string $content
     *
     * @return array
     */
    private function getIdsFromText($content)
    {
        $dom = new DOMDocument;
        $dom->loadHTML($content);
        $finder = new DomXPath($dom);
        $spans = $finder->query("//span[contains(@class, 'nnst')]");

        $ids = [];
        foreach ($spans as $span) {
            foreach ($span->attributes as $key => $attribute) {
                if ($attribute->name === 'data-id') {
                    $ids[] = $attribute->value;
                }
            }
        }

        return $ids;
    }

    /**
     * @param TooltipModel $tooltip
     * @return string
     */
    private function getHtmlTooltip($tooltip)
    {
        return '<div class="nnst-info" data-id="' . $tooltip->getId() . '"><div class="nnst-content">' . $tooltip->getPreparedTooltip() . '</div><div class="nnst-tooltip-arrow"></div></div>';
    }
}
