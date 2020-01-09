<?php

namespace Snapper\Demo\Block;

use Magento\Framework\View\Element\Template\Context;

class Autofillform extends \Magento\Framework\View\Element\Template
{

    /**
     * @param Context $context,
     * @param array   $data = []
     */
    public function __construct(
        Context $context,
        array $data = []
    ) {
        parent::__construct($context, $data);
    }

    /**
     * Return ajax url for button.
     *
     * @return string
     */
    public function getGoogleApiKey()
    {
        return trim($this->_scopeConfig->getValue('autofill/general_settings/google_api_key'));;
    }

}
