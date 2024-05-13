import { View } from "react-native"

export interface AutocompleteMultiselectProps {
    
    data?: Array<object>
    showDataItem?: string
    placeholder?: string

    returnSelectedItems?: ( selectedItems: Array<object> ) => void

}

export const AutocompleteMultiselect = ( {

    data,
    showDataItem,
    placeholder,

    returnSelectedItems

}: AutocompleteMultiselectProps ) => {
    return (

        <View>



        </View>

    )
}