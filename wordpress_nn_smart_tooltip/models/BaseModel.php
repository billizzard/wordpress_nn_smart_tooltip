<?php

abstract class BaseModel
{
    /**
     * WP table model
     */
    protected $model;

    /**
     * @param $object
     */
    public function __construct($object)
    {
        $this->model = $object;
    }
}
