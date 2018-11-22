<?php

class TinymceTooltip
{
    /**
     * @param array $pluginSettings
     *
     * @return mixed
     */
    public function addTooltipButtonToPanel($pluginSettings)
    {
        $pluginSettings['nn_smart_tooltip'] = plugins_url('js/tinymceTooltipButton.js', __FILE__);

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
}
