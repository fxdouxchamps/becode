export interface LabelValueType {
  label: string;
  value: string;
  selected?: boolean;
  subQuestions?: [];
}

export interface ResponseType<T> {
  data: T;
  meta: MetaType[];
}

export interface CreateWorkflowIdResponseType {
  partyId: string;
  workflowId: string;
}

export interface MetaType {
  level: string;
  message: string;
}

export interface AbsToken {
  bearer: string;
  instance: string;
  username: string;
  brokerLanguage: string;
}

export interface Office {
  key: string;
  bcab: string;
  name: string;
  permissions: Permission;
}

export interface Permission {
  readWrite: boolean;
  lineOfBusiness: string[];
}

export interface ValidationMessage {
  type: string;
  text: string;
}

export interface PersonObject {
  partyId: string;
  gender: string;
  lastName: string;
  firstName: string;
  dateOfBirth?: string;
  address: AddressType;
  phoneNumber?: string;
  email?: string;
  preferredLanguage?: string;
  familySituation?: string;
  socialSecurityNumber?: string;
  companyName?: string;
  legalForm?: string;
  enterpriseId?: string;
  brokerOffice?: string;
  familySituationChanged?: boolean;
  blocked?: boolean;
  packagePartyId?: string;
  professionPartner?: any;
  youngerChildren?: boolean;
}

export interface LegalPersonSearchObject {
  city: string;
  zipCode: string;
  companyName: string;
}

export interface LegalPersonObject {
  address: AddressType;
  blocked: boolean;
  companyName: string;
  enterpriseId: string;
  legalForm: string;
  partyId: string;
}

export interface AddressType {
  street: string;
  houseNumber: string;
  box: string;
  zipCode: string;
  city: string;
  key?: string;
  propertyRentalAddress?: string;
}

export interface CustomerType {
  person: PersonObject;
  company: PersonObject;
  address: AddressType;
  contactInfo: ContactInfoType;
  paymentInformation: CustomerPaymentInformation;
  documentInformation: DocumentInformation;
}

export interface ContactInfoType {
  mobilePhone: string;
  phone: string;
  emails: EmailType[];
  preferredEmail: string;
  promotionPermissionPhone: boolean;
}

export interface EmailType {
  email: string;
  marketingInfo: boolean;
}

export interface CustomerPaymentInformation {
  iban: string[];
}

export interface DocumentInformation {
  documentNewBusinessSource: LabelValueType[];
  documentRenewalSource: LabelValueType[];
  documentClaimSource?: LabelValueType[];
}


export interface CrrdLiabilityType {
  policyHolder: PersonObject;
}

export interface CurrentProduct {
  workflowId: string;
  productCode: string;
  name: string;
  index: number; // this is the index of the current product in the list of products
  contractId?: string;
  backToPackage?: boolean;
  partyId?: string;
  editingQuoteComplete?: boolean;
  statusCode?: string;
}

export interface QuoteCompletionType {
  summary: SummaryType;
  startDate: QuoteStartDateType;
  validTill?: QuoteStartDateType;
  documents: DocumentsInfoType;
}

export interface LiabilityQuoteCompletionType extends QuoteCompletionType {
  propertyRentalChosen: boolean;
  propertyRental: AddressType[];
  hunters: PersonObject[];
  numberOfHunters?: number;
}

export interface QuoteStartDateType {
  insuranceStart: string;
}

export interface SummaryType {
  productType: string;
  product: string;
  contractNumber?: string;
  premium?: string;
  bundle?: string;
  productLabel?: string;
  policyHolder: PersonObject;
  phQuestion?: boolean;
  productCode?: string;
  startDate?: string;
  insuredObject?: string;
  includeInPackage?: boolean;
  paymentFrequency?: string;
  toBeInsured?: boolean;
}

export interface DocumentsInfoType {
  uploadedDocuments: DocumentInfoType[];
}

export interface DocumentInfoType {
  documentId: string;
  name: string;
  type?: string;
  date?: string;
}

export interface ProductType {
  productCode: string;
  productLabel: string;
  productCategoryCode: string;
  productCategoryLabel: string;
  contractId?: string;
  statusCode?: string;
  phaseCode?: string;
}

export class ProductSummaryType {
  insuredObject: string;
  product: string;
  productCode?: string;
  productLabel?: string;
  productKey?: string;
  bundle: string;
  startDate: string;
  effectiveDate?: string;
  premium: number;
  paymentFrequency: string;
  contractNumber: string;
  contractId?: string;
  policyHolder: PersonObject;
  familySituation?: string;
  riskAddress?: AddressType;
  toBeInsured?: ToBeInsuredType;
  statusCode?: string;
  includeInPackage?: boolean;
}

export interface ToBeInsuredType {
  house: boolean;
  household: boolean;
}

export interface AdvancedSearchType {
  persons: PersonObject[];
  policies: ContractType[];
}

export interface ContractParentType {
  contractInformation: ContractInfoType;
  documentInformation: DocumentInfoType[];
  policyHolder: CustomerType;
  relatedContracts: RelatedContractsType[];
  applicationQuestions: ApplicationType;
  payment: PaymentType;
  comment: CommentType;
  claims: ClaimSummaryType[];
  bookingsSummary: BookingsSummaryType;
}

export interface RelatedContractsType {
  totalAnnualPremium: number;
  contracts: RelatedContractsProductType[];
  applications: RelatedContractsProductType[];
  quotes: RelatedContractsProductType[];
}

export interface RelatedContractsProductType {
  contractId: string;
  productCode: string;
  productLabel: string;
  contractNumber: string;
  cancelled: boolean;
  renewalDate: string;
  phaseCode: string;
  phaseLabel: string;
  statusCode: string;
  statusLabel: string;
  firstName: string;
  lastName: string;
  bundleName: string;
  insuredObject: string;
  premium: number;
  paymentFrequency: string;
  yearlyPremium: number;
  partyId?: string;
  productCategoryCode?: string;
  familySituation?: string;
  companyName?: string;
  toBeInsured?: ToBeInsuredType;
}

export interface BookingsSummaryType {
  balance: string;
  bookings: BookingsType[];
}

export interface BookingsType {
  reminderLevel: string;
  bookingDate: string;
  amount: string;
  preInvoiceFrom: string;
  preInvoiceTo: string;
  netTotal: string;
}

// #region - Contract information types
export interface ContractInfoType {
  messages?: ContractInfoMessageType[];
  contract: ContractType;
  policyHolderSummary: PersonObject;
  coverageInformation: any;
}

export interface ContractType {
  contractId: string;
  contractNumber: string;
  amendmentCode: string;
  phaseCode: string;
  phaseLabel: string;
  statusCode: string;
  statusLabel: string;
  packageInformation: string;
  startDate: string;
  creationDate: string;
  renewalDate: string;
  validTill: string;
  effectiveDate: string;
  productCode: string;
  canAddToPackage?: boolean;
  productLabel?: string;
  canGenerateGreencard?: boolean;
  brokerReference?: string;
  includeInPackage?: boolean;
  paymentFrequency?: string;
  premium?: number;
  transactionType?: string;
}

export interface ContractInfoMessageReplyType {
  action: string;
  comment?: string;
}

export interface ContractInfoMessageType {
  date: string;
  name: string;
  comment: string;
}

export interface LiabilityContractInfoType extends ContractInfoType {
  propertyRental: AddressType[];
  hunters: PersonObject[];
}

export interface ApplicationType {
  summary?: any;
  personalQuestions: AppQuestionType[];
  productQuestions: AppQuestionType[];
  payment: PaymentType;
  comment: CommentType;
}

export interface CommentType {
  commentText: string;
  leaveComment: boolean;
}

export interface AppQuestionType {
  questionId: string;
  questionLabel: string;
  answer: boolean;
  sign?: string;
  subquestions: Array<AppSubQuestionType | AppQDropdownType>;
}

export interface AppSubQuestionType {
  type: string;
  id: string;
  label: string;
  value?: string;
  mandatory?: string;
}

export interface AppQDropdownType extends AppSubQuestionType {
  selectedOption: any;
  dropdownOptions?: LabelValueType[];
  dataList?: string;
}

export interface AppQDateType extends AppSubQuestionType {
  value: string;
}

export interface AppQTextType extends AppSubQuestionType {
  value: string;
  maxLength: number;
}

export interface AppQTextareaType extends AppSubQuestionType {
  value: string;
  maxLength: number;
}

export interface AppQNumericType extends AppSubQuestionType {
  value: string;
}

export interface PaymentType {
  overridePref: boolean;
  paymentFrequency: PaymentFrequencyType;
  paymentInformation: PaymentInformationType;
  contactInfo: ContactInfoType;
  mainResidence: AddressType;
  secondaryResidences?: AddressType[];
  documentInformation: DocumentInformation;
  advertisingInformation?: { email: string; optin: boolean; };
  useAsDefault?: boolean;
  changePaymentFrequency?: boolean;
}

export interface ClaimSummaryType {
  claimId: string;
  claimNumber: string;
  contractId: string;
  contractNumber: string;
  claimDate: string;
  statusCode: string;
  statusLabel: string;
  statusDetails: string;
  details?: ClaimDetail;
  productCode: string;
  productLabel: string;
  productCategoryCode: string;
  restrictAccess?: boolean;
  restrictAccessLegal?: boolean;
  initials?: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  bundleName: string;
  insuredObject?: string;
  familySituation?: string;
  coverageName?: string;
}

export interface ClaimDetail {
  lossType: string;
  lossCause: string;
  description?: string;
}


export class PaymentFrequencyType {
  contractId?: string;
  contractNumber: string;
  insuredObject: InsuredObject;
  selectedFrequency: string;
  allFrequencies: FrequencyType[];
}

export class InsuredObject {
  display: string;
  address?: AddressType;
}


export interface FrequencyType {
  premiumPerYear: number;
  premium: number;
  frequency: LabelValueType;
}

export interface PaymentInformationType {
  collectionMode: CollectionModeType[];
  policyHolderPayer: boolean;
  enforced: boolean;
  policyPayer: PersonObject;
  ibanPayer: string[];
  preferredIbanPayer: string;
}

export interface DocumentInformationType {
  documentSource: LabelValueType[];
  renewalDocumentSource: LabelValueType[];
}

export interface CollectionModeType {
  label: string;
  value: string;
  selected: boolean;
  paymentType: LabelValueType[];
}

export interface DocumentInfoType {
  documentId: string;
  name: string;
  type?: string;
  date?: string;
}

export interface SimpleSearchType {
  search?: string;
  displayOnly?: string;
}

export interface Environment {
  production: boolean;
  assetTranslationsPath: string;
  loginEnabled: boolean;
  BASE_URL: string;
}

export interface PremissionGDPREmailType {
  name: 'contract' | 'marketing' | 'email';
  value: boolean;
}

export interface LocationType {
  zipCode: string[];
  city: string[];
  street: string[];
  houseNumber: string[];
}

// From NL personal car
export class InputsType {
  label: string;
  key: string;
  value: string;
  type: string;
}

export interface FinancingCompanyType {
  partyId: string;
  leased: boolean;
  financingCompanyName: string;
  financingCompanyNotFound: string;
  cfyAvailable: boolean;
}

export interface CreateContractIdResponseType {
  partyId: string;
  contractId: string;
}

// Quote and buy
export interface CrrdCarType {
  bonusMalus: BonusMalus;
  vehicleDetails: MmtCar;
  additionalCarInfo: AdditionalCarInfo;
  mainDriver: MainDriverCar;
}

// startOf# MMT car types
export interface VehicleDetails {
  type: string;
  power: string;
  noOfDoors: number;
  originalPrice: number;
  year: string;
  fuelType: string;
  make: string;
  model: string;
  priceID: string;
  propertyType: string;
  transmission: string;
}

export interface MmtCar extends VehicleDetails { }

export interface MmtCarResponse {
  year: LabelValueType[];
  make: LabelValueType[];
  model: LabelValueType[];
  fuelType: LabelValueType[];
  type: MmtCar[]
}
// endOf# MMT car types

export interface BonusMalus {
  licenseDate?: string
  claimProofYears: number;
  tplNo: number;
}

export interface AdditionalCarInfo {
  registrationDate: string;
  typeOfCar: LabelValueType[];
  vehicleUsage?: LabelValueType[];
  vatDeductible: LabelValueType[];
  yearlyMileage: LabelValueType[];
  priceType: LabelValueType[];
  price: number;
  safetyOptions: LabelValueType[];
  takeOverSimilarConditions: LabelValueType[];
}

export interface MainDriverCar {
  isPolicyHolder: boolean;
  person: PersonObject;
}

// #region - COVERAGES
export class BundlesType {
  name: string;
  key: string;
  premium: number;
  derogation: boolean;
  selected: boolean;
  selectable?: boolean;
  bonusMalusDiscounts: {
    coverage: string;
    bonusMalusLevel: number;
    bonusMalusDiscountPercentage: number;
  }[];
  components: Array<CoverageType>;
  clauses: Array<ClausesType>;
  additionalCoverages: Array<CoverageType>;
  pricing: PricingType;
}

export class CoverageType {
  name: string;
  key: string;
  type: string;
  code: string;
  premium: number;
  sum?: number;
  mandatory?: boolean;
  selected: boolean;
  inputs?: Array<InputsType>;
  options?: Array<LabelValueType>;
  trailers?: Array<Array<TrailerPropertyType>>;
  classProduct?: string;

  checkName?: string;
  checkKey?: string;
  checkSelected?: boolean;
}

export interface BonusMalusDiscountType {
  bonusMalusLevel: number;
  bonusMalusDiscountPercentage: number;
}

export class ClausesType {
  name: string;
  type: string;
  key?: string;
}

export class PricingType {
  premium: number;
  premiumOnDemand?: string;
  discount: number;
  commission: number;
  netPremium: number;
  taxes: number;
  yearlyPremium: number;
  options?: Array<LabelValueType>;
  selectedOption?: string;
}

export interface TrailerType {
  make: string;
  dateOfFirstRegistration: string;
  chassisNumber: string;
  grossVehicleMass: string;
  premium?: string;
  licensePlate?: string;
}

export class TrailerPropertyType {
  label: string;
  key: string;
  value: string;
}

export class SelectionType {
  key: string;
  code: string;
  selected: boolean;
  inputs?: Array<InputsType>;
  options?: Array<LabelValueType>;
  selectedOption?: string;
  trailers?: Array<Array<TrailerPropertyType>>;
  checkName?: string;
  checkKey?: string;
  checkSelected?: boolean;
}

export interface CoverageComponentType {
  name: string;
  premium?: string;
  trailerInformation?: TrailerType[];
  extraAccessoriesInformation?: ExtraAccessoriesInformation;
  selectedOption?: string;
  selectedCheck?: string;
  options?: LabelValueType;
}

export interface ExtraAccessoriesInformation {
  insuredSum: string;
  description: string;
  premium: string;
}

export class CoverageInfoType {
  bundleName: string;
  bundlePremium: string;
  startDate: string;
  bonusMalusDiscounts: {
    coverage: string;
    bonusMalusLevel: number;
    bonusMalusDiscountPercentage: number;
    bonusMalusDiscountAmount: number;
  }[];
  components: CoverageComponentType[];
  additionalCoverages: CoverageComponentType[];
  pricing: PricingType;
  discount: DiscountType;
  clauses: ClausesType[];
  termsAndConditions: TermsAndConditionsType[];
}
export interface TermsAndConditionsType {
  name: string;
  key: string;
  type: string;
}

export class DiscountType {
  frequencySurcharge: number;
  frequencySurchargePercentage: number;
  premiumBeforeTaxes: number;
  taxes: number;
  premium: number;
  premiumPerYear: number;
  brokerCommission: string;
  netPremium: number;
  bonusMalus: number;
  grossPremium: number;
  selectedFrequency?: string;
  discounts: {
    coverage: string;
    brokerCommissionSelected: number;
    brokerCommissionMaximum?: number;
    brokerDiscountSelected: number;
    netPremium: number;
    grossPremium: number;
    brokerDiscountMaximum?: number;
    coverageName?: string;
    multiVehicleDiscount?: number;
  }[];
}
// #endregion - COVERAGES

// #region - Quote completion product types
export interface QuoteCompletionType {
  summary: SummaryType;
  startDate: QuoteStartDateType;
  documents: DocumentsInfoType;
}

export interface CarQuoteCompletionType extends QuoteCompletionType {
  additionalVehicleDetails: AdditionalVehicleDetails;
  insuranceCardTrailer: InsuranceCardTrailerType;
  cascoSelected: boolean;
  financingCompany: FinancingCompanyType;
  mainDriver: PersonObject;
}

export interface LiabilityQuoteCompletionType extends QuoteCompletionType {
  propertyRental: AddressType[];
  hunters: PersonObject[];
  numberOfHunters?: number;
}

export interface AccidentQuoteCompletionType extends QuoteCompletionType {
  insuredPartner: PersonObject[];
  insuredChildren: PersonObject[];
  youngerChildren: boolean;
}

export interface TravelCompletionType extends QuoteCompletionType {
  insuredPartner: PersonObject;
  youngerChildren: boolean;
  insuredChildren: PersonObject[];
}

export interface CaravanQuoteCompletionType extends QuoteCompletionType {
  additionalVehicleDetails: { licensePlate: string; chassisNumber: string; };
}

export interface InsuranceCardTrailerType {
  additionalTrailer: AdditionalTrailer[];
}
export interface AdditionalTrailer {
  label: string;
  key: string;
  value: string;
  type: string;
}
export interface MappedTrailerType {
  BRANDNAM: string;
  EX_LICPL: string;
}

export interface AdditionalVehicleDetails {
  licensePlate: string;
  chassisNumber: string;
  checkDigit: string;
}
// #endregion - Quote completion product types

export interface CrrdPropertyType {
  riskAddress: AddressType;
  toBeInsured: ToBeInsuredType;
  houseHousehold: HouseHouseholdType;
}

export interface ToBeInsuredType {
  house: boolean;
  household: boolean;
}

export interface HouseHouseholdType {
  conditions: string;
  roof: string;
  roofDescription?: string;
  construction: string;
  constructionDescription?: string;
  use: string;
  buildingType: string;
  apartmentInsured: string;
  yearOfConstruction?: string;
  squareMeters?: number;
  solarPanels: boolean;
  policyHolderType: string;
  theft: string;
  gridHouse: string;
  sumInsured?: {
    houseValue: number;
    householdValue: number;
  };
  property?: {
    buildingId: string;
    householdId: string;
  };
  edmCallDone?: boolean;
}

export interface CrrdLiabilityType {
  policyHolder: PersonObject;
}

export interface CrrdTravelType {
  policyHolder: PersonObject;
}

export interface CrrdLegalProtectionType {
  policyHolder: PersonObject;
}

export interface CrrdAccidentType {
  policyHolder: PersonObject;
}

export interface CoveragesType {
  voluntaryDerogation: boolean;
  coverages: BundlesType[];
  policyHolder: PersonObject;
}

export interface BundlesType {
  name: string;
  key: string;
  premium: number;
  derogation: boolean;
  selected: boolean;
  selectable?: boolean;
  bonusMalusDiscounts: {
    coverage: string;
    bonusMalusLevel: number;
    bonusMalusDiscountPercentage: number;
  }[];
  components: CoverageType[];
  clauses: ClausesType[];
  additionalCoverages: CoverageType[];
  pricing: PricingType;
  termsAndConditions: TermsAndConditionsType[];
}

export interface CoverageType {
  name: string;
  key: string;
  type: string;
  code: string;
  premium: number;
  selected: boolean;
  mandatory?: boolean;
  sum?: number;
  selectedOption?: string;
  options?: LabelValueType[];
  inputs?: InputsType[];
  // trailers?: Array<Array<TrailerPropertyType>>;
  // classProduct?: string;
  checkName?: string;
  checkKey?: string;
  checkSelected?: boolean;
  trailerInformation?: TrailerType[];
  extraAccessoriesInformation?: ExtraAccessoriesInformation;
  selectedCheck?: string;
  components?: CoverageType[];
}

export interface ExtraAccessoriesInformation {
  insuredSum: string;
  description: string;
  premium: string;
}

export interface BonusMalusDiscountType {
  bonusMalusLevel: number;
  bonusMalusDiscountPercentage: number;
}

export interface ClausesType {
  name: string;
  type: string;
  key?: string;
}

export interface PricingType {
  premium: number;
  premiumOnDemand?: string;
  discount: number;
  commission: number;
  netPremium: number;
  taxes: number;
  yearlyPremium: number;
  options?: LabelValueType[];
  selectedOption?: string;
}

export interface TrailerType {
  make: string;
  dateOfFirstRegistration: string;
  chassisNumber: string;
  grossVehicleMass: string;
  premium?: string;
  licensePlate?: string;
}

export interface TrailerPropertyType {
  label: string;
  key: string;
  value: string;
}

export interface SelectionType {
  key: string;
  code: string;
  selected: boolean;
  inputs?: InputsType[];
  options?: LabelValueType[];
  selectedOption?: string;
  trailers?: Array<Array<TrailerPropertyType>>;
  checkName?: string;
  checkKey?: string;
  checkSelected?: boolean;
}

export interface InputsType {
  label: string;
  key: string;
  value: string;
  type: string;
}

export interface TermsAndConditionsType {
  name: string;
  key: string;
  type: string;
}

export const FEATURE_TRANSLATIONS = {
  car: [
    [
      'coverages-bundles.features-car-b1-01',
      'coverages-bundles.features-car-b1-02'
    ],
    [
      'coverages-bundles.features-car-b2-01',
      'coverages-bundles.features-car-b2-02',
      'coverages-bundles.features-car-b2-03',
      'coverages-bundles.features-car-b2-04',
      'coverages-bundles.features-car-b2-05'
    ],
    [
      'coverages-bundles.features-car-b3-01',
      'coverages-bundles.features-car-b3-02',
      'coverages-bundles.features-car-b3-03',
      'coverages-bundles.features-car-b3-04',
      'coverages-bundles.features-car-b3-05',
      'coverages-bundles.features-car-b3-06'
    ]
  ],
  caravan: [
    [
      'coverages-bundles.features-caravan-b1-01',
      'coverages-bundles.features-caravan-b1-02',
      'coverages-bundles.features-caravan-b1-03'
    ],
    [
      'coverages-bundles.features-caravan-b2-01',
      'coverages-bundles.features-caravan-b2-02',
      'coverages-bundles.features-caravan-b2-03',
      'coverages-bundles.features-caravan-b2-04'
    ],
    [],
  ],
  moped: [
    [
      'coverages-bundles.features-moped-b1-01',
      'coverages-bundles.features-moped-b1-02'
    ],
    [],
    [],
  ],
  property: [
    [
      'coverages-bundles.features-property-b1-01',
      'coverages-bundles.features-property-b1-02',
      'coverages-bundles.features-property-b1-03',
      'coverages-bundles.features-property-b1-04',
      'coverages-bundles.features-property-b1-05'
    ],
    [
      'coverages-bundles.features-property-b2-01',
      'coverages-bundles.features-property-b2-02',
      'coverages-bundles.features-property-b2-03',
      'coverages-bundles.features-property-b2-04',
      'coverages-bundles.features-property-b2-05',
      'coverages-bundles.features-property-b2-06'
    ],
    [],
  ],
  liability: [
    [
      'coverages-bundles.features-liability-b1-01',
      'coverages-bundles.features-liability-b1-02',
      'coverages-bundles.features-liability-b1-03'
    ],
    [],
    [],
  ],
  accident: [
    [
      'coverages-bundles.features-accident-b1-01',
      'coverages-bundles.features-accident-b1-02',
      'coverages-bundles.features-accident-b1-03',
      'coverages-bundles.features-accident-b1-04'
    ],
    [
      'coverages-bundles.features-accident-b2-01',
      'coverages-bundles.features-accident-b2-02',
      'coverages-bundles.features-accident-b2-03',
      'coverages-bundles.features-accident-b2-04'
    ],
    [
      'coverages-bundles.features-accident-b3-01',
      'coverages-bundles.features-accident-b3-02',
      'coverages-bundles.features-accident-b3-03',
      'coverages-bundles.features-accident-b3-04'
    ]
  ],
  travel: [
    [
      'coverages-bundles.features-travel-b1-01',
      'coverages-bundles.features-travel-b1-02',
      'coverages-bundles.features-travel-b1-03',
      'coverages-bundles.features-travel-b1-04',
      'coverages-bundles.features-travel-b1-05'
    ],
    [
      'coverages-bundles.features-travel-b2-01',
      'coverages-bundles.features-travel-b2-02',
      'coverages-bundles.features-travel-b2-03',
      'coverages-bundles.features-travel-b2-04'
    ],
    [],
  ],
  'legal-protection': [
    [
      'coverages-bundles.features-legal-protection-b1-01',
      'coverages-bundles.features-legal-protection-b1-02'
    ],
    [],
    [],
  ],
  motorcycle: [
    [
      'coverages-bundles.features-motorcycle-b1-01',
      'coverages-bundles.features-motorcycle-b1-02'
    ],
    [
      'coverages-bundles.features-motorcycle-b2-01',
      'coverages-bundles.features-motorcycle-b2-02',
      'coverages-bundles.features-motorcycle-b2-03',
      'coverages-bundles.features-motorcycle-b2-04',
      'coverages-bundles.features-motorcycle-b2-05'
    ],
    [
      'coverages-bundles.features-motorcycle-b3-01',
      'coverages-bundles.features-motorcycle-b3-02',
      'coverages-bundles.features-motorcycle-b3-03',
      'coverages-bundles.features-motorcycle-b3-04',
      'coverages-bundles.features-motorcycle-b3-05',
      'coverages-bundles.features-motorcycle-b3-06'
    ]
  ],
  oldtimer: [
    [
      'coverages-bundles.features-oldtimer-b1-01',
      'coverages-bundles.features-oldtimer-b1-02'
    ],
    [
      'coverages-bundles.features-oldtimer-b2-01',
      'coverages-bundles.features-oldtimer-b2-02',
      'coverages-bundles.features-oldtimer-b2-03',
      'coverages-bundles.features-oldtimer-b2-04',
      'coverages-bundles.features-oldtimer-b2-05',
      'coverages-bundles.features-oldtimer-b2-06'
    ],
    [],
  ],
};

export interface InsuredObjectType {
  make: string;
  model: string;
  type: string;
  fuelType: string;
  vehicleType: string;
  weight: string;
  price: string;
  vehicleUsage: string;
  vatDeductible: string;
  financingCompany: string;
  licensePlate: string;
}

export interface InsuredObjectCarType extends InsuredObjectType {
  meldCode: string;
  constructionDate: string;
  registrationDate: string;
  yearlyMileage: LabelValueType[];
  safetyOptions: LabelValueType[];
}

export interface ContractInfoType {
  messages?: ContractInfoMessageType[];
  contract: ContractType;
  policyHolderSummary: PersonObject;
  coverageInformation: any;
}

export interface CarContractInfoType extends ContractInfoType {
  insuredObject: InsuredObjectCarType;
  mainDriver: PersonObject;
  insuranceCardTrailer?: InsuranceCardTrailerType;
}

export interface MainDriverSummaryType {
  person: PersonObject;
  policyHolder: boolean;
}
