export interface CityInfo {
    Description: string;
    DescriptionRu: string;
    Ref: string;
    Delivery1: string;
    Delivery2: string;
    Delivery3: string;
    Delivery4: string;
    Delivery5: string;
    Delivery6: string;
    Delivery7: string;
    Area: string;
    SettlementType: string;
    IsBranch: string;
    PreventEntryNewStreetsUser: string;
    Conglomerates: string;
    CityID: string;
    SettlementTypeDescriptionRu: string;
    SettlementTypeDescription: string;
}

export interface CityListResponce {
    success: boolean;
    data: CityInfo[];
    errorCodes: [];
    errors: [];
    warnings: [];
    info: [];
    messageCodes: [];
    warningCodes: [];
    infoCodes: [];
}

export interface WarehouseListResponce {
    success: boolean;
    data: WarehouseInfo[];
    errorCodes: [];
    errors: [];
    warnings: [];
    info: [];
    messageCodes: [];
    warningCodes: [];
    infoCodes: [];
}

export interface WarehouseInfo {
    SiteKey: string;
    Description: string;
    DescriptionRu: string;
    ShortAddress: string;
    ShortAddressRu: string;
    Phone: string;
    TypeOfWarehouse: string;
    Ref: string;
    Number: string;
    CityRef: string;
    CityDescription: string;
    CityDescriptionRu: string;
    SettlementRef: string;
    SettlementDescription: string;
    SettlementAreaDescription: string;
    SettlementRegionsDescription: string;
    SettlementTypeDescription: string;
    SettlementTypeDescriptionRu: string;
    Longitude: string;
    Latitude: string;
    PostFinance: string;
    BicycleParking: string;
    PaymentAccess: string;
    POSTerminal: string;
    InternationalShipping: string;
    SelfServiceWorkplacesCount: string;
    TotalMaxWeightAllowed: string;
    PlaceMaxWeightAllowed: string;
    SendingLimitationsOnDimensions: IngLimitationsOnDimensions;
    ReceivingLimitationsOnDimensions: IngLimitationsOnDimensions;
    Reception: Delivery;
    Delivery: Delivery;
    Schedule: Delivery;
    DistrictCode: string;
    WarehouseStatus: string;
    WarehouseStatusDate: string;
    CategoryOfWarehouse: string;
    RegionCity: string;
    WarehouseForAgent: string;
    MaxDeclaredCost: string;
    DenyToSelect: string;
    PostMachineType: string;
    PostalCodeUA: string;
    OnlyReceivingParcel: string;
    WarehouseIndex: string;
}

interface Delivery {
    Monday: string;
    Tuesday: string;
    Wednesday: string;
    Thursday: string;
    Friday: string;
    Saturday: string;
    Sunday: string;
}

interface IngLimitationsOnDimensions {
    Width: number;
    Height: number;
    Length: number;
}