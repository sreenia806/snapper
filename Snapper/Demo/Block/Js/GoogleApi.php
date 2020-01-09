<?php

namespace Snapper\Demo\Block\Js;
use Snapper\Demo\Api\ApiConfigInterface;
use Magento\Framework\View\Element\Template;
/**
 * Class GoogleApi
 */
class GoogleApi extends Template
{
    /**
     * @var array
     */
    private $fieldsMap;
    /**
     * @var ApiConfigInterface
     */
    private $apiConfig;
    /**
     * GoogleApi constructor.
     *
     * @param Template\Context $context
     * @param ApiConfigInterface $apiConfig
     * @param array $fieldsMap
     * @param array $data
     */
    public function __construct(
        Template\Context $context,
        ApiConfigInterface $apiConfig,
        $fieldsMap = [],
        array $data = []
    ) {
        parent::__construct($context, $data);
        $this->fieldsMap = $fieldsMap;
        $this->configResolver = $apiConfig;
    }
    /**
     * @return array
     */
    public function getFieldsMap()
    {
        return $this->fieldsMap;
    }
    /**
     * @return string
     */
    public function getApiKey()
    {
        return $this->configResolver->getApiKey();
    }
    /**
     * @return string
     */
    public function isEnabled()
    {
        return $this->configResolver->getIsEnabled();
    }