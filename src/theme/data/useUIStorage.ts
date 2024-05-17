import {useBaseStorage} from '../../data';
import {ThemeInfo} from '../interfaces';
export const useUIStorage = () => {
  const {SaveData, GetData} = useBaseStorage();
  const SaveTheme = async (data: ThemeInfo) => await SaveData(data, 'theme');
  const GetTheme = async (): Promise<ThemeInfo> =>
    await GetData<ThemeInfo>('theme');
  return {
    SaveTheme,
    GetTheme,
  };
};
