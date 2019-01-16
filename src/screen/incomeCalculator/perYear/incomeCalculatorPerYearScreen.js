
import { FormLabel, FormInput } from 'react-native-elements';
import React,{Component} from 'react';
import {ToastAndroid, View, Text, TouchableOpacity,ScrollView, StyleSheet} from 'react-native';
import commonStyle from '../../../styles/common.style';

export class IncomeCalculatorPerYearScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const data = {
            totalProduction: 'Rp. 120.000.000',
            total: 'Rp. 459.000.000',
            commission: '90.000.000',
            bonus: '63.000.000',
            renewal: '90.000.000',
            orDirectTeam: '216.000.000'
        };

        return (
            <ScrollView>
                <Text style={style.titleText}>Level Criteria</Text>

                <FormLabel>Personal Production</FormLabel>
                <FormInput value={data.personalProduction}/>

                <FormLabel>Direct Agent</FormLabel>
                <FormInput value={data.directAgent}/>

                <FormLabel>Direct Agent Production</FormLabel>
                <FormInput value={data.directAgentProduction}/>

                <FormLabel>Direct ABM Production</FormLabel>
                <FormInput value={data.directAbmProduction}/>

                <FormLabel>Direct BM Production</FormLabel>
                <FormInput value={data.directBmProduction}/>

                <FormLabel>Direct ABD Production</FormLabel>
                <FormInput value={data.directAbdProduction}/>

                <FormLabel>Direct BD Production</FormLabel>
                <FormInput value={data.directBdProduction}/>

                <Text>Total Production</Text>
                <Text style={style.bigText}>{data.totalProduction}</Text>


                <Text style={style.titleText}>End of Year Promotion</Text>

                <FormLabel>Promotion to ABM</FormLabel>
                <FormInput value={data.promotionToAbm}/>

                <FormLabel>Promotion to BM</FormLabel>
                <FormInput value={data.promotionToBm}/>

                <FormLabel>Promotion to ABD</FormLabel>
                <FormInput value={data.promotionToAbd}/>

                <FormLabel>Promotion to BD</FormLabel>
                <FormInput value={data.promotionToBd}/>

                <View style={commonStyle.buttonContainer}>
                <TouchableOpacity style={commonStyle.buttonOpac}>
                        <Text style={commonStyle.buttonText}>
                            Calculate
                        </Text>
                    </TouchableOpacity>
                </View>

                <Text style={style.titleText}>Potential Income</Text>

                <Text>Commission</Text>
                <Text>{data.commission}</Text>

                <Text>Bonus</Text>
                <Text>{data.bonus}</Text>

                <Text>Renewal (2nd year)</Text>
                <Text>{data.renewal}</Text>

                <Text>OR Direct Team</Text>
                <Text>{data.orDirectTeam}</Text>

                <Text>OR Group Team (BM)</Text>
                <Text>{data.orGroupTeamBm}</Text>

                <Text>OR Group Team (ABD)</Text>
                <Text>{data.orGroupTeamAbd}</Text>

                <Text>BD Generation</Text>
                <Text>{data.bdGeneration}</Text>

                <Text style={style.titleText}>Total</Text>
                <Text style={style.bigText}>{data.total}</Text>

            </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
    },
    bigText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'red'
    }
})