type ObjectType<T = keyof PostMessageCommand> = PostMessageCommand[T];

type SendPostMessageArgs =
  | {
      command: PostMessageCommand.getInitData;
      params?: undefined;
    }
  | {
      command: PostMessageCommand.refreshAuth;
      params?: undefined;
    }
  | {
      command: PostMessageCommand.crmStatusGet;
      params: any;
    };

declare interface PostMessageCommand {
  getInitData: "getInitData",
  refreshAuth: "refreshAuth",
  // crmSettingsModeGet = "crm.settings.mode.get",
  // crmStatusFields = "crm.status.fields",
  // crmStatusAdd = "crm.status.add",
  // crmStatusGet = "crm.status.get",
  // crmStatusList = "crm.status.list",
  // crmStatusUpdate = "crm.status.update",
  // crmStatusDelete = "crm.status.delete",
  // crmStatusEntityTypes = "crm.status.entity.types",
  // crmStatusEntityItems = "crm.status.entity.items",
  // crmStatusExtraFields = "crm.status.extra.fields",
  // crmInvoiceStatusFields = "crm.invoice.status.fields",
  // crmInvoiceStatusAdd = "crm.invoice.status.add",
  // crmInvoiceStatusGet = "crm.invoice.status.get",
  // crmInvoiceStatusList = "crm.invoice.status.list",
  // crmInvoiceStatusUpdate = "crm.invoice.status.update",
  // crmInvoiceStatusDelete = "crm.invoice.status.delete",
  // crmEnumSettingsMode = "crm.enum.settings.mode",
  // crmEnumFields = "crm.enum.fields",
  // crmEnumOwnertype = "crm.enum.ownertype",
  // crmEnumAddresstype = "crm.enum.addresstype",
  // crmEnumContenttype = "crm.enum.contenttype",
  // crmEnumActivitytype = "crm.enum.activitytype",
  // crmEnumActivitypriority = "crm.enum.activitypriority",
  // crmEnumActivitydirection = "crm.enum.activitydirection",
  // crmEnumActivitynotifytype = "crm.enum.activitynotifytype",
  // crmEnumActivitystatus = "crm.enum.activitystatus",
  // crmEnumEntityeditorConfigurationScope = "crm.enum.entityeditor.configuration.scope",
  // crmLeadFields = "crm.lead.fields",
  // crmLeadAdd = "crm.lead.add",
  // crmLeadGet = "crm.lead.get",
  // crmLeadList = "crm.lead.list",
  // crmLeadUpdate = "crm.lead.update",
  // crmLeadDelete = "crm.lead.delete",
  // crmLeadProductrowsSet = "crm.lead.productrows.set",
  // crmLeadProductrowsGet = "crm.lead.productrows.get",
  // crmDealFields = "crm.deal.fields",
  // crmDealAdd = "crm.deal.add",
  // crmDealGet = "crm.deal.get",
  // crmDealList = "crm.deal.list",
  // crmDealUpdate = "crm.deal.update",
  // crmDealDelete = "crm.deal.delete",
  // crmDealProductrowsSet = "crm.deal.productrows.set",
  // crmDealProductrowsGet = "crm.deal.productrows.get",
  // crmDealContactFields = "crm.deal.contact.fields",
  // crmDealContactAdd = "crm.deal.contact.add",
  // crmDealContactDelete = "crm.deal.contact.delete",
  // crmDealContactItemsGet = "crm.deal.contact.items.get",
  // crmDealContactItemsSet = "crm.deal.contact.items.set",
  // crmDealContactItemsDelete = "crm.deal.contact.items.delete",
  // crmDealcategoryFields = "crm.dealcategory.fields",
  // crmDealcategoryList = "crm.dealcategory.list",
  // crmDealcategoryAdd = "crm.dealcategory.add",
  // crmDealcategoryGet = "crm.dealcategory.get",
  // crmDealcategoryUpdate = "crm.dealcategory.update",
  // crmDealcategoryDelete = "crm.dealcategory.delete",
  // crmDealcategoryStatus = "crm.dealcategory.status",
  // crmDealcategoryStageList = "crm.dealcategory.stage.list",
  // crmDealcategoryDefaultGet = "crm.dealcategory.default.get",
  // crmDealcategoryDefaultSet = "crm.dealcategory.default.set",
  // crmDealRecurringFields = "crm.deal.recurring.fields",
  // crmDealRecurringList = "crm.deal.recurring.list",
  // crmDealRecurringAdd = "crm.deal.recurring.add",
  // crmDealRecurringGet = "crm.deal.recurring.get",
  // crmDealRecurringUpdate = "crm.deal.recurring.update",
  // crmDealRecurringDelete = "crm.deal.recurring.delete",
  // crmDealRecurringExpose = "crm.deal.recurring.expose",
  // crmInvoiceRecurringFields = "crm.invoice.recurring.fields",
  // crmInvoiceRecurringList = "crm.invoice.recurring.list",
  // crmInvoiceRecurringAdd = "crm.invoice.recurring.add",
  // crmInvoiceRecurringGet = "crm.invoice.recurring.get",
  // crmInvoiceRecurringUpdate = "crm.invoice.recurring.update",
  // crmInvoiceRecurringDelete = "crm.invoice.recurring.delete",
  // crmInvoiceRecurringExpose = "crm.invoice.recurring.expose",
  // crmCompanyFields = "crm.company.fields",
  // crmCompanyAdd = "crm.company.add",
  // crmCompanyGet = "crm.company.get",
  // crmCompanyList = "crm.company.list",
  // crmCompanyUpdate = "crm.company.update",
  // crmCompanyDelete = "crm.company.delete",
  // crmCompanyContactFields = "crm.company.contact.fields",
  // crmCompanyContactAdd = "crm.company.contact.add",
  // crmCompanyContactDelete = "crm.company.contact.delete",
  // crmCompanyContactItemsGet = "crm.company.contact.items.get",
  // crmCompanyContactItemsSet = "crm.company.contact.items.set",
  // crmCompanyContactItemsDelete = "crm.company.contact.items.delete",
  // crmContactFields = "crm.contact.fields",
  // crmContactAdd = "crm.contact.add",
  // crmContactGet = "crm.contact.get",
  // crmContactList = "crm.contact.list",
  // crmContactUpdate = "crm.contact.update",
  // crmContactDelete = "crm.contact.delete",
  // crmContactCompanyFields = "crm.contact.company.fields",
  // crmContactCompanyAdd = "crm.contact.company.add",
  // crmContactCompanyDelete = "crm.contact.company.delete",
  // crmContactCompanyItemsGet = "crm.contact.company.items.get",
  // crmContactCompanyItemsSet = "crm.contact.company.items.set",
  // crmContactCompanyItemsDelete = "crm.contact.company.items.delete",
  // crmCurrencyFields = "crm.currency.fields",
  // crmCurrencyAdd = "crm.currency.add",
  // crmCurrencyGet = "crm.currency.get",
  // crmCurrencyList = "crm.currency.list",
  // crmCurrencyUpdate = "crm.currency.update",
  // crmCurrencyDelete = "crm.currency.delete",
  // crmCurrencyLocalizationsFields = "crm.currency.localizations.fields",
  // crmCurrencyLocalizationsGet = "crm.currency.localizations.get",
  // crmCurrencyLocalizationsSet = "crm.currency.localizations.set",
  // crmCurrencyLocalizationsDelete = "crm.currency.localizations.delete",
  // crmCurrencyBaseSet = "crm.currency.base.set",
  // crmCurrencyBaseGet = "crm.currency.base.get",
  // crmCatalogFields = "crm.catalog.fields",
  // crmCatalogGet = "crm.catalog.get",
  // crmCatalogList = "crm.catalog.list",
  // crmProductFields = "crm.product.fields",
  // crmProductAdd = "crm.product.add",
  // crmProductGet = "crm.product.get",
  // crmProductList = "crm.product.list",
  // crmProductUpdate = "crm.product.update",
  // crmProductDelete = "crm.product.delete",
  // crmProductPropertyTypes = "crm.product.property.types",
  // crmProductPropertyFields = "crm.product.property.fields",
  // crmProductPropertySettingsFields = "crm.product.property.settings.fields",
  // crmProductPropertyEnumerationFields = "crm.product.property.enumeration.fields",
  // crmProductPropertyAdd = "crm.product.property.add",
  // crmProductPropertyGet = "crm.product.property.get",
  // crmProductPropertyList = "crm.product.property.list",
  // crmProductPropertyUpdate = "crm.product.property.update",
  // crmProductPropertyDelete = "crm.product.property.delete",
  // crmProductsectionFields = "crm.productsection.fields",
  // crmProductsectionAdd = "crm.productsection.add",
  // crmProductsectionGet = "crm.productsection.get",
  // crmProductsectionList = "crm.productsection.list",
  // crmProductsectionUpdate = "crm.productsection.update",
  // crmProductsectionDelete = "crm.productsection.delete",
  // crmProductrowFields = "crm.productrow.fields",
  // crmProductrowAdd = "crm.productrow.add",
  // crmProductrowGet = "crm.productrow.get",
  // crmProductrowList = "crm.productrow.list",
  // crmProductrowUpdate = "crm.productrow.update",
  // crmProductrowDelete = "crm.productrow.delete",
  // crmActivityFields = "crm.activity.fields",
  // crmActivityAdd = "crm.activity.add",
  // crmActivityGet = "crm.activity.get",
  // crmActivityList = "crm.activity.list",
  // crmActivityUpdate = "crm.activity.update",
  // crmActivityDelete = "crm.activity.delete",
  // crmActivityCommunicationFields = "crm.activity.communication.fields",
  // crmActivityTypeAdd = "crm.activity.type.add",
  // crmActivityTypeList = "crm.activity.type.list",
  // crmActivityTypeDelete = "crm.activity.type.delete",
  // crmQuoteFields = "crm.quote.fields",
  // crmQuoteAdd = "crm.quote.add",
  // crmQuoteGet = "crm.quote.get",
  // crmQuoteList = "crm.quote.list",
  // crmQuoteUpdate = "crm.quote.update",
  // crmQuoteDelete = "crm.quote.delete",
  // crmQuoteProductrowsSet = "crm.quote.productrows.set",
  // crmQuoteProductrowsGet = "crm.quote.productrows.get",
  // crmQuoteContactFields = "crm.quote.contact.fields",
  // crmQuoteContactAdd = "crm.quote.contact.add",
  // crmQuoteContactDelete = "crm.quote.contact.delete",
  // crmQuoteContactItemsGet = "crm.quote.contact.items.get",
  // crmQuoteContactItemsSet = "crm.quote.contact.items.set",
  // crmQuoteContactItemsDelete = "crm.quote.contact.items.delete",
  // crmRequisiteFields = "crm.requisite.fields",
  // crmRequisiteAdd = "crm.requisite.add",
  // crmRequisiteGet = "crm.requisite.get",
  // crmRequisiteList = "crm.requisite.list",
  // crmRequisiteUpdate = "crm.requisite.update",
  // crmRequisiteDelete = "crm.requisite.delete",
  // crmRequisiteUserfieldAdd = "crm.requisite.userfield.add",
  // crmRequisiteUserfieldGet = "crm.requisite.userfield.get",
  // crmRequisiteUserfieldList = "crm.requisite.userfield.list",
  // crmRequisiteUserfieldUpdate = "crm.requisite.userfield.update",
  // crmRequisiteUserfieldDelete = "crm.requisite.userfield.delete",
  // crmRequisitePresetFields = "crm.requisite.preset.fields",
  // crmRequisitePresetAdd = "crm.requisite.preset.add",
  // crmRequisitePresetGet = "crm.requisite.preset.get",
  // crmRequisitePresetList = "crm.requisite.preset.list",
  // crmRequisitePresetUpdate = "crm.requisite.preset.update",
  // crmRequisitePresetDelete = "crm.requisite.preset.delete",
  // crmRequisitePresetCountries = "crm.requisite.preset.countries",
  // crmRequisitePresetFieldFields = "crm.requisite.preset.field.fields",
  // crmRequisitePresetFieldAvailabletoadd = "crm.requisite.preset.field.availabletoadd",
  // crmRequisitePresetFieldAdd = "crm.requisite.preset.field.add",
  // crmRequisitePresetFieldGet = "crm.requisite.preset.field.get",
  // crmRequisitePresetFieldList = "crm.requisite.preset.field.list",
  // crmRequisitePresetFieldUpdate = "crm.requisite.preset.field.update",
  // crmRequisitePresetFieldDelete = "crm.requisite.preset.field.delete",
  // crmRequisiteBankdetailFields = "crm.requisite.bankdetail.fields",
  // crmRequisiteBankdetailAdd = "crm.requisite.bankdetail.add",
  // crmRequisiteBankdetailGet = "crm.requisite.bankdetail.get",
  // crmRequisiteBankdetailList = "crm.requisite.bankdetail.list",
  // crmRequisiteBankdetailUpdate = "crm.requisite.bankdetail.update",
  // crmRequisiteBankdetailDelete = "crm.requisite.bankdetail.delete",
  // crmRequisiteLinkFields = "crm.requisite.link.fields",
  // crmRequisiteLinkList = "crm.requisite.link.list",
  // crmRequisiteLinkGet = "crm.requisite.link.get",
  // crmRequisiteLinkRegister = "crm.requisite.link.register",
  // crmRequisiteLinkUnregister = "crm.requisite.link.unregister",
  // crmAddressFields = "crm.address.fields",
  // crmAddressAdd = "crm.address.add",
  // crmAddressUpdate = "crm.address.update",
  // crmAddressList = "crm.address.list",
  // crmAddressDelete = "crm.address.delete",
  // crmAddressGetzoneid = "crm.address.getzoneid",
  // crmAddressSetzoneid = "crm.address.setzoneid",
  // crmAddresstypeGetavailable = "crm.addresstype.getavailable",
  // crmAddresstypeGetzonemap = "crm.addresstype.getzonemap",
  // crmAddresstypeGetdefaultbyzone = "crm.addresstype.getdefaultbyzone",
  // crmAddresstypeGetbyzonesorvalues = "crm.addresstype.getbyzonesorvalues",
  // crmMeasureFields = "crm.measure.fields",
  // crmMeasureAdd = "crm.measure.add",
  // crmMeasureGet = "crm.measure.get",
  // crmMeasureList = "crm.measure.list",
  // crmMeasureUpdate = "crm.measure.update",
  // crmMeasureDelete = "crm.measure.delete",
  // crmLeadUserfieldAdd = "crm.lead.userfield.add",
  // crmLeadUserfieldGet = "crm.lead.userfield.get",
  // crmLeadUserfieldList = "crm.lead.userfield.list",
  // crmLeadUserfieldUpdate = "crm.lead.userfield.update",
  // crmLeadUserfieldDelete = "crm.lead.userfield.delete",
  // crmDealUserfieldAdd = "crm.deal.userfield.add",
  // crmDealUserfieldGet = "crm.deal.userfield.get",
  // crmDealUserfieldList = "crm.deal.userfield.list",
  // crmDealUserfieldUpdate = "crm.deal.userfield.update",
  // crmDealUserfieldDelete = "crm.deal.userfield.delete",
  // crmCompanyUserfieldAdd = "crm.company.userfield.add",
  // crmCompanyUserfieldGet = "crm.company.userfield.get",
  // crmCompanyUserfieldList = "crm.company.userfield.list",
  // crmCompanyUserfieldUpdate = "crm.company.userfield.update",
  // crmCompanyUserfieldDelete = "crm.company.userfield.delete",
  // crmContactUserfieldAdd = "crm.contact.userfield.add",
  // crmContactUserfieldGet = "crm.contact.userfield.get",
  // crmContactUserfieldList = "crm.contact.userfield.list",
  // crmContactUserfieldUpdate = "crm.contact.userfield.update",
  // crmContactUserfieldDelete = "crm.contact.userfield.delete",
  // crmQuoteUserfieldAdd = "crm.quote.userfield.add",
  // crmQuoteUserfieldGet = "crm.quote.userfield.get",
  // crmQuoteUserfieldList = "crm.quote.userfield.list",
  // crmQuoteUserfieldUpdate = "crm.quote.userfield.update",
  // crmQuoteUserfieldDelete = "crm.quote.userfield.delete",
  // crmInvoiceUserfieldAdd = "crm.invoice.userfield.add",
  // crmInvoiceUserfieldGet = "crm.invoice.userfield.get",
  // crmInvoiceUserfieldList = "crm.invoice.userfield.list",
  // crmInvoiceUserfieldUpdate = "crm.invoice.userfield.update",
  // crmInvoiceUserfieldDelete = "crm.invoice.userfield.delete",
  // crmUserfieldFields = "crm.userfield.fields",
  // crmUserfieldTypes = "crm.userfield.types",
  // crmUserfieldEnumerationFields = "crm.userfield.enumeration.fields",
  // crmUserfieldSettingsFields = "crm.userfield.settings.fields",
  // crmExternalchannelConnectorFields = "crm.externalchannel.connector.fields",
  // crmExternalchannelConnectorList = "crm.externalchannel.connector.list",
  // crmExternalchannelConnectorRegister = "crm.externalchannel.connector.register",
  // crmExternalchannelConnectorUnregister = "crm.externalchannel.connector.unregister",
  // crmMultifieldFields = "crm.multifield.fields",
  // crmDuplicateFindbycomm = "crm.duplicate.findbycomm",
  // crmLivefeedmessageAdd = "crm.livefeedmessage.add",
  // crmExternalchannelCompany = "crm.externalchannel.company",
  // crmExternalchannelContact = "crm.externalchannel.contact",
  // crmExternalchannelActivityCompany = "crm.externalchannel.activity.company",
  // crmExternalchannelActivityContact = "crm.externalchannel.activity.contact",
  // crmWebformConfigurationGet = "crm.webform.configuration.get",
  // crmSitebuttonConfigurationGet = "crm.sitebutton.configuration.get",
  // crmPersontypeFields = "crm.persontype.fields",
  // crmPersontypeList = "crm.persontype.list",
  // crmPaysystemFields = "crm.paysystem.fields",
  // crmPaysystemList = "crm.paysystem.list",
  // crmAutomationTrigger = "crm.automation.trigger",
  // crmAutomationTriggerAdd = "crm.automation.trigger.add",
  // crmAutomationTriggerList = "crm.automation.trigger.list",
  // crmAutomationTriggerDelete = "crm.automation.trigger.delete",
  // crmAutomationTriggerExecute = "crm.automation.trigger.execute",
  // crmTimelineCommentFields = "crm.timeline.comment.fields",
  // crmTimelineCommentAdd = "crm.timeline.comment.add",
  // crmTimelineCommentList = "crm.timeline.comment.list",
  // crmTimelineCommentGet = "crm.timeline.comment.get",
  // crmTimelineCommentDelete = "crm.timeline.comment.delete",
  // crmTimelineCommentUpdate = "crm.timeline.comment.update",
  // crmTimelineBindingsFields = "crm.timeline.bindings.fields",
  // crmTimelineBindingsList = "crm.timeline.bindings.list",
  // crmTimelineBindingsBind = "crm.timeline.bindings.bind",
  // crmTimelineBindingsUnbind = "crm.timeline.bindings.unbind",
  // crmLeadDetailsConfigurationGet = "crm.lead.details.configuration.get",
  // crmLeadDetailsConfigurationSet = "crm.lead.details.configuration.set",
  // crmLeadDetailsConfigurationReset = "crm.lead.details.configuration.reset",
  // crmLeadDetailsConfigurationForceCommonScopeForAll = "crm.lead.details.configuration.forceCommonScopeForAll",
  // crmDealDetailsConfigurationGet = "crm.deal.details.configuration.get",
  // crmDealDetailsConfigurationSet = "crm.deal.details.configuration.set",
  // crmDealDetailsConfigurationReset = "crm.deal.details.configuration.reset",
  // crmDealDetailsConfigurationForceCommonScopeForAll = "crm.deal.details.configuration.forceCommonScopeForAll",
  // crmContactDetailsConfigurationGet = "crm.contact.details.configuration.get",
  // crmContactDetailsConfigurationSet = "crm.contact.details.configuration.set",
  // crmContactDetailsConfigurationReset = "crm.contact.details.configuration.reset",
  // crmContactDetailsConfigurationForceCommonScopeForAll = "crm.contact.details.configuration.forceCommonScopeForAll",
  // crmCompanyDetailsConfigurationGet = "crm.company.details.configuration.get",
  // crmCompanyDetailsConfigurationSet = "crm.company.details.configuration.set",
  // crmCompanyDetailsConfigurationReset = "crm.company.details.configuration.reset",
  // crmCompanyDetailsConfigurationForceCommonScopeForAll = "crm.company.details.configuration.forceCommonScopeForAll",
}
