import { Image, Text, View } from 'react-native';
import { formatCurrency } from '../lib/utils';

interface UpcomingSubscriptionCardProps {
  data: UpcomingSubscription;
}

const UpcomingSubscriptionCard = ({
  data: { name, price, daysLeft, icon, currency },
}: UpcomingSubscriptionCardProps) => {
  return (
    <View className='upcoming-card'>
      {/* Row: icon + price + days left */}
      <View className='flex-row items-center gap-3'>
        <Image source={icon} className='upcoming-icon' style={{ width: 55, height: 55 }} />

       <View>
        <Text className='upcoming-price'>{formatCurrency(price, currency)}</Text>
        <Text className='upcoming-meta' numberOfLines={1}>
          {daysLeft > 1 ? `${daysLeft} days left` : 'Renewal today'}
        </Text>
      </View>
      
    </View>

      {/* Name is under the row */}
      <Text className='upcoming-name' numberOfLines={1}>
        {name}
      </Text>
    </View>
  );
};

export default UpcomingSubscriptionCard;