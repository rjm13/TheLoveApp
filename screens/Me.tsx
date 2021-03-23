import React, {useState, useRef} from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import PartnerTile from '../components/partnertile';
import PartnerFlatList from '../components/partnerflatlist';

import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import { RadioButton } from 'react-native-paper';



const Me = () => {

    const modalRef = useRef<Modalize>(null);

    const onOpen = () => {
        modalRef.current?.open();
    };

    // const Item = ({ title, id }) => {

    //     const [isChecked, setIsChecked] = useState(
    //         { id: id, name: title, selected: false }
    //       );

    //         const onCheck = (id) => {
    //             let updatedState = (isCheckedItem) => {
    //                 if (isCheckedItem.id === id && isCheckedItem.selected === false)
    //                     return { ...isCheckedItem, selected: true}
    //                 else return { ...isCheckedItem, selected: false } 
    //             };
    //         setIsChecked(updatedState);
    //       };
      
    //     return (
           
    //         <TouchableWithoutFeedback onPress={() => onCheck(id)}>
    //             <View style={styles.listcomponent}>
    //                 <FontAwesome 
    //                     name={isChecked.selected ? 'check-square' : 'square-o'}
    //                     color={isChecked.selected ? 'purple' : 'gray'}
    //                     size={20}
    //                     style={{paddingHorizontal: 20}}
    //                 />
    //                 <Text style={styles.listitem}>
    //                     {title}
    //                 </Text>
    //             </View>
    //         </TouchableWithoutFeedback>
            
    //         ); 
    //       }
      

    // const renderItem = ({ item }) => (
    //     <Item 
    //         title={item.title} 
    //         id={item.id} 
    //     />
    //   );

    const [Status, setStatus] = useState('content');

    const StatusColor = () => {

        if (Status === 'Content') {return 'white'} 

        else if (Status === 'Horny') {return 'green'} 
    
        else if (Status === 'Sexy') {return 'purple'}

        else if (Status === 'Neglected') {return 'red'}

        else if (Status === 'Not well') {return 'red'}

        else if (Status === 'Loved') {return 'gold'}

        else if (Status === 'In the mood') {return 'purple'}

        else if (Status === 'Needing space') {return 'red'}

        else {return 'white'}
    }

    

    return (
        <View style={styles.container}>

            <View>

                <View style={styles.headerblock}>
                    <View style={styles.nameblock}>
                        <FontAwesome5 
                            name='mars'
                            size={20}
                            color='purple'
                            style={{paddingRight: 20}}
                        />
                        <Text style={styles.title}>
                            Pierre Woodman
                        </Text>      
                    </View>

                    <View style={styles.qrblock}>
                        <AntDesign 
                            name='qrcode'
                            size={40}
                            color='#fff'
                        />
                    </View>

                </View>

                <TouchableOpacity onPress={onOpen}>
                    <View style={{flexDirection: 'row', marginHorizontal: 20, marginBottom: 10}}>
                        <Text style={[styles.status, {color: 'gray'}]}>
                            Feeling
                        </Text> 
                        <Text style={[styles.status, {color: StatusColor(), textTransform: 'lowercase'}]}>
                            {Status}
                        </Text>
                    </View>
                </TouchableOpacity>


                <View >
                    <PartnerFlatList />
                </View>

                <View style={styles.optionslist}>

                    <View style={styles.optionsitem}>
                        <Text style={styles.paragraph}>
                            Account
                        </Text>
                        <FontAwesome5 
                            name='angle-right'
                            color='#fff'
                            size={25}
                        />
                    </View>

                    <View style={styles.optionsitem}>
                        <Text style={styles.paragraph}>
                            Orders
                        </Text>
                        <FontAwesome5 
                            name='angle-right'
                            color='#fff'
                            size={25}
                        />
                    </View>

                    <View style={styles.optionsitem}>
                        <Text style={styles.paragraph}>
                            Shopping Cart
                        </Text>
                        <FontAwesome5 
                            name='angle-right'
                            color='#fff'
                            size={25}
                        />
                    </View>
                </View>

            </View>

            <View style={styles.footer}>
                <Text style={styles.title}>
                    Settings
                </Text>
            </View>

        <StatusBar style="dark" />

            <Portal>
                <Modalize
                ref={modalRef}
                modalStyle={{
                    backgroundColor: '#1a1a1a'
                }}
                scrollViewProps={{
                    
                }}
                HeaderComponent={
                    <View style={styles.modalcontainer}>
                        <Text style={styles.title}>
                            Share Your Mood
                        </Text>
                    </View>
                }
                >
                    <View>
                        <RadioButton.Group onValueChange={newValue => setStatus(newValue)} value={Status}>
                            <View style={{flexDirection: 'row'}}>
                                <View style={styles.radiorow}>
                                    <RadioButton 
                                        value="Content" 
                                        color='white'
                                        uncheckedColor='white'
                                        />
                                    <Text style={styles.radiobutton}>Content</Text>
                                </View>
                                <View style={styles.radiorow}>
                                    <RadioButton 
                                        value="Horny" 
                                        color='green'
                                        uncheckedColor='white'
                                        />
                                    <Text style={styles.radiobutton}>Horny</Text>
                                </View>
                            </View>

                            <View style={{flexDirection: 'row'}}>
                                <View style={styles.radiorow}>
                                    <RadioButton 
                                        value="Not well" 
                                        color='red'
                                        uncheckedColor='white'
                                        />
                                    <Text style={styles.radiobutton}>Not well</Text>
                                </View>
                                <View style={styles.radiorow}>
                                    <RadioButton 
                                        value="Neglected" 
                                        color='red'
                                        uncheckedColor='white'
                                        />
                                    <Text style={styles.radiobutton}>Neglected</Text>
                                </View>
                            </View>

                            <View style={{flexDirection: 'row'}}>
                                <View style={styles.radiorow}>
                                    <RadioButton 
                                        value="Sexy" 
                                        color='gold'
                                        uncheckedColor='white'
                                        />
                                    <Text style={styles.radiobutton}>Sexy</Text>
                                </View>
                                <View style={styles.radiorow}>
                                    <RadioButton 
                                        value="Needing space" 
                                        color='red'
                                        uncheckedColor='white'
                                        />
                                    <Text style={styles.radiobutton}>Needing space</Text>
                                </View>
                            </View>

                            <View style={{flexDirection: 'row'}}>
                                <View style={styles.radiorow}>
                                    <RadioButton 
                                        value="Loved" 
                                        color='gold'
                                        uncheckedColor='white'
                                        />
                                    <Text style={styles.radiobutton}>Loved</Text>
                                </View>
                                <View style={styles.radiorow}>
                                    <RadioButton 
                                        value="In the mood" 
                                        color='purple'
                                        uncheckedColor='white'
                                        />
                                    <Text style={styles.radiobutton}>In the mood</Text>
                                </View>
                            </View>
                           
                            
                            </RadioButton.Group>   
                    </View>
                    
                    
                </Modalize>
            </Portal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      justifyContent: 'space-between'
      
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff'
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    headerblock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 30,
    },
    qrblock: {
        margin: 20,
    },
    nameblock: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
    },
    paragraph: {
        fontSize: 16,
        color: '#fff'
    },
    footer: {
        alignSelf: 'center', 
        margin: 20,
        borderWidth: 0.5,
        borderColor: '#fff',
        paddingVertical: 4,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    optionslist: {

    },
    optionsitem: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginHorizontal: 40,
        marginTop: 20,
    },
    status: {
        fontSize: 16,
        paddingRight: 8,

    },
    modalcontainer: {
        alignItems: 'center',
        margin: 20,
    },
    modalheader: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
      },
      modalblock: {
        margin: 20,
      },
      radiorow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        paddingLeft: 20,
      },
      radiobutton: {
        fontSize: 16,
        color: 'white',
        marginLeft: 10,
        width: 100
      },
  });

  export default Me;
