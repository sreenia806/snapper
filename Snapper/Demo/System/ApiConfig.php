<?php

namespace Snapper\Demop\System;
use Snapper\Demop\Api\ApiConfigInterface;
use Magento\Framework\App\Config\ScopeConfigInterface;
/**
 * Class ConfigResolver
 */
class AutocompleteConfigResolver implements ApiConfigInterface
{
    /**
     * @var ScopeConfigInterface
     */
    private $scopeConfig;
    /**
     * ConfigResolver constructor.
     *
     * @param ScopeConfigInterface $scopeConfig
     */
    public function __construct(ScopeConfigInterface $scopeConfig)
    {
        $this->scopeConfig = $scopeConfig;
    }
    /**
     * @return bool
     */
    public function getIsEnabled(): bool
    {
        return $this->scopeConfig->getValue(self::PATH_IS_ENABLED);
    }
    /**
     * @return string
     */
    public function getApiKey(): string
    {
        return $this->scopeConfig->getValue(self::PATH_API_KEY);
    }
}