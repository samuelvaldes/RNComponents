import React, { useContext } from 'react'
import { View, Text, SectionList, VirtualizedList } from 'react-native'
import HeaderTitle from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { styles } from '../theme/theme';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
      casa: "DC Comics",
      data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin","Batman", "Superman", "Robin","Batman", "Superman", "Robin",]
    },
    {
      casa: "Marvel Comics",
      data: ["Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman","Antman", "Thor", "Spiderman","Antman", ]
    },
    {
      casa: "Anime",
      data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama","Kenshin", "Goku", "Saitama",]
    }
];

export default function SectionListScreen() {
    const {setLightTheme, setDarkTheme, theme: { colors }} = useContext(ThemeContext);
    return (
        <View style={styles.globalMargin}>
            {/* <HeaderTitle title="Section List"/> */}

            <SectionList
                sections={casas}
                keyExtractor={(item, index)=> item+index}
                renderItem={({item}) => <Text style={{color: colors.text}}>{item}</Text>}
                stickySectionHeadersEnabled
                ListHeaderComponent={() => <HeaderTitle title="Section List"/>}
                ListFooterComponent={() => <HeaderTitle title={"Total de Casas: " + casas.length}/>}
                renderSectionHeader={({section}) => (
                    <View style={{backgroundColor: colors.background}}>
                        <HeaderTitle title={section.casa}/>                        
                    </View>
                )}
                renderSectionFooter={({section}) => (
                    <HeaderTitle title={'Total: ' + section.data.length}/>     
                )}
                SectionSeparatorComponent={()=><ItemSeparator/>}
            />
        </View>
    )
}
