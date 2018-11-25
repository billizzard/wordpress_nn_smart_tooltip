<?php

require_once plugin_dir_path(dirname(__FILE__)) . 'models/TooltipModel.php';
require_once plugin_dir_path(dirname(__FILE__)) . 'mappers/BaseMapper.php';

class TooltipMapper extends BaseMapper
{
    /**
     * @return string
     */
    protected function table()
    {
        return $this->wpdb->prefix . 'nn_smart_tooltip';
    }

    /**
     * @param object $object
     *
     * @return null|TooltipModel
     */
    protected function doCreateObject($object)
    {
        return $object ? new TooltipModel($object) : null;
    }

    /**
     * @param array $array
     *
     * @return TooltipModel[]
     */
    protected function doCreateArray($array)
    {
        return array_map(function ($rawData) {
            return new TooltipModel($rawData);
        }, $array);
    }
}
