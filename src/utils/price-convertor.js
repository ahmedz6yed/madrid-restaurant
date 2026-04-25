export default function PriceConvertor (number ){
    let  value = String(number);
    value = value.split('.')
    return {egp: value[0] , piasters: value [1]}
}