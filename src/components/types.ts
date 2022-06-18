export interface INavigationPaths {
    name: string;
    path: string;
    icon: JSX.Element;
}

export interface IComponentStore {
    searchKey: string
    setSearchKey: (key: string) => void
} 