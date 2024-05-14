import {SheetDefinition, registerSheet} from 'react-native-actions-sheet';
import {SelectorSheet} from './Sheets/Selector/SelectorSheet';

const sheets: {id: string; Sheet: any}[] = [
  {id: 'selector', Sheet: SelectorSheet},
];

sheets.map(({id, Sheet}, _) => registerSheet(id, Sheet));

// We extend some of the types here to give us great intellisense
// across the app for all registered sheets.
declare module 'react-native-actions-sheet' {
  interface Sheets {
    selector: SheetDefinition<{
      payload: {
        items: any[];
        keyProperty: string;
        search?: boolean;
        title?: string;
        //multiselect?: boolean;
      };
      returnValue: any;
    }>;
  }
}

export {};
