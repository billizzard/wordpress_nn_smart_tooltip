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
                $jsonTooltips = $this->getJsonFromTooltips($tooltips);
            }
        }

        return isset($jsonTooltips) ?
            $content . "<textarea>" . $jsonTooltips . "</textarea>" :
            $content;
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
        $classname = "nnst";
        $spans = $finder->query("//span[contains(@class, '$classname')]");

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
     * @param TooltipModel[] $tooltips
     *
     * @return false|string
     */
    private function getJsonFromTooltips($tooltips)
    {
        $result = [];
        foreach ($tooltips as $tooltip) {
            $result[$tooltip->getId()] = $tooltip->getPreparedTooltip();
        }

        return json_encode($result);
    }
}
