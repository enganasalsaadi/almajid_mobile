import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const fontNameSemiBold = 'Montserrat-Bold';
const fontNameRegular = 'Montserrat-Regular';

export default {

    TextBold9: {
        fontSize: wp(9),
        fontFamily:  fontNameSemiBold,
        textAlign:  'auto',
    },
    TextRegular: {
        fontSize: wp(4.5),
        fontFamily:  fontNameRegular,
        textAlign:  'auto',
    },
    TextRegular35: {
        fontSize: wp(3.5),
        fontFamily:  fontNameRegular,
        textAlign:  'auto',
    },
    TextRegular3: {
        fontSize: wp(3),
        fontFamily:  fontNameRegular,
        textAlign:  'auto',
    },
}