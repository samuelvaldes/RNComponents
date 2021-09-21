import React from 'react'
import { View, Text, SectionList, VirtualizedList } from 'react-native'
import HeaderTitle from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { styles } from '../theme/theme';

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
    return (
        <View style={styles.globalMargin}>
            {/* <HeaderTitle title="Section List"/> */}

            <SectionList
                sections={casas}
                keyExtractor={(item, index)=> item+index}
                renderItem={({item}) => <Text>{item}</Text>}
                stickySectionHeadersEnabled
                ListHeaderComponent={() => <HeaderTitle title="Section List"/>}
                ListFooterComponent={() => <HeaderTitle title={"Total de Casas: " + casas.length}/>}
                renderSectionHeader={({section}) => (
                    <View style={{backgroundColor: 'white'}}>
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
