
import { FormLabel, FormInput } from 'react-native-elements';
import React,{Component} from 'react';
import {ToastAndroid, View, Text, TouchableOpacity,ScrollView, StyleSheet} from 'react-native';
import commonStyle from '../../../styles/common.style';
import Dash from 'react-native-dash';
import { fields, fieldsConfig } from './incomeCalculatorPerYearScreenFormatter';
import { commissionRate } from './rate/commission';
import { bonusProductionRate } from './rate/bonusProduction';
import { promotionRate } from './rate/promotion';
import { bonusPersistencyRate } from './rate/bonusPersistency';
import { bmRate } from './rate/overriding';

export class IncomeCalculatorPerYearScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            personalProduction: '',
            directAgen: '',
            directAgenProduction: '',
            directAbmProduction: '',
            directBmProduction: '',
            directAbdProduction: '',
            directBdProduction: '',
            totalProduction: 'Rp. -,',
            promotionToAbm: promotionRate.filter(x => x.year == props.year)[0].abm + '',
            promotionToBm: promotionRate.filter(x => x.year == props.year)[0].bm + '',
            promotionToAbd: promotionRate.filter(x => x.year == props.year)[0].abd + '',
            promotionToBd: promotionRate.filter(x => x.year == props.year)[0].bd + '',
            total: 'Rp. -,',
            commission: 'Rp. -,',
            bonus: 'Rp. -,',
            renewal: 'Rp. -,',
            orDirectTeam: 'Rp. -,',
            orGroupTeamBm: '',
            orGroupTeamAbd: '',
            bdGeneration: ''
        }
    }

    onChangeText(value) {

        if (value != "") {
            value = value.replace(/\D/g, "");

            value = value.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1" + ',');

        }
        return value;
    }

    calculate() {
        const personalProduction = this.getNumberValue(this.state.personalProduction);
        const directAgen = this.getNumberValue(this.state.directAgen);
        const directAgenProduction = this.getNumberValue(this.state.directAgenProduction);
        const directAbmProduction = this.getNumberValue(this.state.directAbmProduction);
        const directBmProduction = this.getNumberValue(this.state.directBmProduction);
        const directAbdProduction = this.getNumberValue(this.state.directAbdProduction);
        const directBdProduction = this.getNumberValue(this.state.directBdProduction);
        const totalProduction = this.getNumberValue(this.state.totalProduction);
        const promotionToAbm = this.getNumberValue(this.state.promotionToAbm);
        const promotionToBm = this.getNumberValue(this.state.promotionToBm);
        const promotionToAbd = this.getNumberValue(this.state.promotionToAbd);
        const promotionToBd = this.getNumberValue(this.state.promotionToBd);
        const total = this.getNumberValue(this.state.total);
        const commission = this.getNumberValue(this.state.commission);
        const bonus = this.getNumberValue(this.state.bonus);
        const renewal = this.getNumberValue(this.state.renewal);
        const orDirectTeam = this.getNumberValue(this.state.orDirectTeam);
        const orGroupTeamBm = this.getNumberValue(this.state.orGroupTeamBm);
        const orGroupTeamAbd = this.getNumberValue(this.state.orGroupTeamAbd);
        const bdGeneration = this.getNumberValue(this.state.bdGeneration);

        const agenProd = (directAgenProduction * directAgen);
        const promoRate = promotionRate.filter(x => x.year == this.props.year - 1)[0] || {};
        const abmProd = (directAbmProduction * promoRate.abm || 0);
        const bmProd = (directBmProduction * promoRate.bm || 0);
        const abdProd = (directAbdProduction * promoRate.abd || 0);
        const bdProd = (directBdProduction * promoRate.bd || 0);
        const totalProd = personalProduction + agenProd + abmProd + bmProd + abdProd + bdProd;

        const commRate = commissionRate[0].rate;
        const comm = commRate * this.getNumberValue(this.state.personalProduction);

        const bonusProdRate = (bonusProductionRate.filter(x =>
            x.minProduction <= personalProduction && x.maxProduction >= personalProduction)[0] || {}).rate || 0;
        const bonusProd = bonusProdRate * personalProduction;
        const bonusPersisRate = (bonusPersistencyRate[0].rate);
        const bonusLastYearProd = bonusPersisRate * 0;
        const totalBonusProd = bonusProd + bonusLastYearProd;

        const renew = commissionRate[1].rate * personalProduction;

        const orDirectTeamResult = totalProd * bmRate[0].rate;

        const orGroupBmTeamResult = 0;


        const tot = comm + totalBonusProd + renew + orDirectTeamResult + orGroupBmTeamResult;

        this.setState({
            totalProduction: "Rp. " + this.onChangeText(totalProd + ''),
            commission: 'Rp. ' + this.onChangeText(comm + ''),
            bonus: 'Rp. ' + this.onChangeText(totalBonusProd + ''),
            total: 'Rp. ' + this.onChangeText(tot + '')
        })
    }

    getNumberValue(str) {
        return parseInt(str.replace(/\D/g,''));
    }

    render() {

        return (
            <ScrollView>
                <Text style={[style.titleText, commonStyle.redColor, commonStyle.leftMargin, commonStyle.topMargin]}>Level Criteria</Text>

                {
                    fieldsConfig["year" + this.props.year].includes(fields.personalProduction) &&
                    <View>
                    <FormLabel>{fields.personalProduction}</FormLabel>
                    <FormInput onChangeText={(value) => { this.setState({ personalProduction: this.onChangeText(value) }); }} keyboardType="numeric" value={this.state.personalProduction}/>
                    </View>
                }

                {
                    fieldsConfig["year" + this.props.year].includes(fields.directAgen) &&
                    <View>
                    <FormLabel>{fields.directAgen}</FormLabel>
                    <FormInput maxLength={2} onChangeText={(value) => { this.setState({ directAgen: this.onChangeText(value) }); }} keyboardType="numeric"  value={this.state.directAgen}/>
                    </View>
                }

                {
                    fieldsConfig["year" + this.props.year].includes(fields.directAgenProduction) &&
                    <View>
                    <FormLabel>{fields.directAgenProduction}</FormLabel>
                    <FormInput onChangeText={(value) => { this.setState({ directAgenProduction: this.onChangeText(value) }); }} keyboardType="numeric"  value={this.state.directAgenProduction}/>
                    </View>
                }

                {
                    fieldsConfig["year" + this.props.year].includes(fields.directAbmProduction) &&
                    <View>
                    <FormLabel>{fields.directAbmProduction}</FormLabel>
                    <FormInput onChangeText={(value) => { this.setState({ directAbmProduction: this.onChangeText(value) }); }} keyboardType="numeric"  value={this.state.directAbmProduction}/>
                    </View>
                }

                {
                    fieldsConfig["year" + this.props.year].includes(fields.directBmProduction) &&
                    <View>
                    <FormLabel>{fields.directBmProduction}</FormLabel>
                    <FormInput onChangeText={(value) => { this.setState({ directBmProduction: this.onChangeText(value) }); }} keyboardType="numeric"  value={this.state.directBmProduction}/>
                    </View>
                }

                {
                    fieldsConfig["year" + this.props.year].includes(fields.directAbdProduction) &&
                    <View>
                    <FormLabel>{fields.directAbdProduction}</FormLabel>
                    <FormInput onChangeText={(value) => { this.setState({ directAbdProduction: this.onChangeText(value) }); }} keyboardType="numeric"  value={this.state.directAbdProduction}/>
                    </View>
                }

                {
                    fieldsConfig["year" + this.props.year].includes(fields.directBdProduction) &&
                    <View>
                    <FormLabel>{fields.directBdProduction}</FormLabel>
                    <FormInput onChangeText={(value) => { this.setState({ directBdProduction: this.onChangeText(value) }); }} keyboardType="numeric"  value={this.state.directBdProduction}/>
                    </View>
                }


                <Text style={[commonStyle.leftMargin, commonStyle.topMargin]}>Total Production</Text>
                <Text style={[style.bigText, commonStyle.redColor, commonStyle.leftMargin]}>{this.state.totalProduction}</Text>

                <Dash style={{ height:1, marginTop: 10, marginBottom: 10,}}/>

                <Text style={[style.titleText, commonStyle.redColor, commonStyle.leftMargin]}>End of Year Promotion</Text>


                {
                    fieldsConfig["year" + this.props.year].includes(fields.promotionToAbm) &&
                    <View>
                    <FormLabel>{fields.promotionToAbm}</FormLabel>
                    <FormInput editable={false} keyboardType="numeric"  value={this.state.promotionToAbm}/>
                    </View>
                }

                {
                    fieldsConfig["year" + this.props.year].includes(fields.promotionToBm) &&
                    <View>
                    <FormLabel>{fields.promotionToBm}</FormLabel>
                    <FormInput editable={false} keyboardType="numeric"  value={this.state.promotionToBm}/>
                    </View>
                }

                {
                    fieldsConfig["year" + this.props.year].includes(fields.promotionToAbd) &&
                    <View>
                    <FormLabel>{fields.promotionToAbd}</FormLabel>
                    <FormInput editable={false} keyboardType="numeric"  value={this.state.promotionToAbd}/>
                    </View>
                }

                {
                    fieldsConfig["year" + this.props.year].includes(fields.promotionToBd) &&
                    <View>
                    <FormLabel>{fields.promotionToBd}</FormLabel>
                    <FormInput editable={false} keyboardType="numeric"  value={this.state.promotionToBd}/>
                    </View>
                }

                <View style={[commonStyle.buttonContainer, commonStyle.leftMargin, commonStyle.rightMargin]}>
                    <TouchableOpacity style={commonStyle.buttonOpac}  onPress={() => this.calculate()}>
                        <Text style={commonStyle.buttonText}>
                            Calculate
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={[{flex: 1, flexDirection: 'column'}, commonStyle.leftMargin]}>
                    <Text style={[style.titleText, commonStyle.redColor]}>Potential Income</Text>

                    {
                        fieldsConfig["year" + this.props.year].includes(fields.commission) &&
                        <View>
                        <Text>{fields.commission}</Text>
                        <Text style={{fontWeight: 'bold'}}>{this.state.commission}</Text>
                        </View>
                    }


                    {
                        fieldsConfig["year" + this.props.year].includes(fields.bonus) &&
                        <View>
                        <Dash style={commonStyle.dashedViewStyle}/>
                        <Text>{fields.bonus}</Text>
                        <Text style={{fontWeight: 'bold'}}>{this.state.bonus}</Text>
                        </View>
                    }

                    {
                        fieldsConfig["year" + this.props.year].includes(fields.renewal2ndYear) &&
                        <View>
                        <Dash style={commonStyle.dashedViewStyle}/>
                        <Text>{fields.renewal2ndYear}</Text>
                        <Text style={{fontWeight: 'bold'}}>{this.state.renewal}</Text>
                        </View>
                    }


                    {
                        fieldsConfig["year" + this.props.year].includes(fields.orDirectTeam) &&
                        <View>
                        <Dash style={commonStyle.dashedViewStyle}/>
                        <Text>{fields.orDirectTeam}</Text>
                        <Text style={{fontWeight: 'bold'}}>{this.state.orDirectTeam}</Text>
                        </View>
                    }


                    {
                        fieldsConfig["year" + this.props.year].includes(fields.orGroupTeamBm) &&
                        <View>
                        <Dash style={commonStyle.dashedViewStyle}/>
                        <Text>{fields.orGroupTeamBm}</Text>
                        <Text style={{fontWeight: 'bold'}}>{this.state.orGroupTeamBm}</Text>
                        </View>
                    }

                    {
                        fieldsConfig["year" + this.props.year].includes(fields.orGroupTeamAbd) &&
                        <View>
                        <Dash style={commonStyle.dashedViewStyle}/>
                        <Text>{fields.orGroupTeamAbd}</Text>
                        <Text style={{fontWeight: 'bold'}}>{this.state.orGroupTeamAbd}</Text>
                        </View>
                    }

                    {
                        fieldsConfig["year" + this.props.year].includes(fields.bdGeneration) &&
                        <View>
                        <Dash style={commonStyle.dashedViewStyle}/>
                        <Text>{fields.bdGeneration}</Text>
                        <Text style={{fontWeight: 'bold'}}>{this.state.bdGeneration}</Text>
                        </View>
                    }

                    <Dash style={commonStyle.dashedViewStyle}/>
                </View>

                <Text style={[style.titleText, commonStyle.leftMargin]}>Total</Text>
                <Text style={[style.bigText, commonStyle.redColor, commonStyle.leftMargin]}>{this.state.total}</Text>

            </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    titleText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    bigText: {
        fontSize: 30,
        fontWeight: 'bold',
    }
})