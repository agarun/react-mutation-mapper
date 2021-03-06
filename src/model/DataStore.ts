export interface DataStore {
    sortedFilteredData: any[]; // TODO find a better way to define/access this data
    setPositionSelected: (position:number, newVal:boolean) => void;
    setPositionHighlighted: (position:number, newVal:boolean) => void;
    clearSelectedPositions: () => void;
    clearHighlightedPositions: () => void;
    setDataSelectFilter?: (dataSelectorFilter: <T>(d: T) => boolean) => void;
    clearDataSelectFilter: () => void;
    setDataHighlightFilter?: (dataHighlightFilter: <T>(d: T) => boolean) => void;
    clearDataHighlightFilter: () => void;
    isPositionSelected: (position:number) => boolean;
    isPositionHighlighted: (position:number) => boolean;
}

export default DataStore;
