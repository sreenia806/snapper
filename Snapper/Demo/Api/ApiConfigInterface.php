<?php


namespace Snapper\Demo\Api;


interface ApiConfigInterface
{
    /**
     * Configuration paths
     */
    const PATH_IS_ENABLED = 'snapper_demo/autocomplete/enable';
    const PATH_API_KEY = 'snapper_demo/autocomplete/api_key';

    /**
     * @return bool
     */
    public function getIsEnabled(): bool;

    /**
     * @return string
     */
    public function getApiKey(): string;
}