import { FlatList } from "react-native";
import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;
export const Header = styled.View`
  background-color: ${colors.white};
  width: 100%;
  height: 78px;
  padding: 0 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Icons = styled.View`
  flex-direction: row;
  margin-right: 10px;
  justify-content: space-between;
  width: 70px;
`;
export const Logo = styled.View`
  align-items: center;
  border-bottom-width: 6px;
  border-bottom-color: ${colors.lightGreen};
  border-radius: 5px;
  width: 62px;
`;
export const LogoText = styled.Text`
  font-size: 30px;
  font-style: italic;
  font-weight: bold;
  color: ${colors.gray};
`;
export const Content = styled.View`
  width: 100%;
  padding: 20px 20px;
`;
export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  font-style: italic;
  color: ${colors.gray};
`;
export const Subtitle = styled.Text`
  font-size: 18px;
  font-style: italic;
  margin: 10px 0;
  color: ${colors.lightGray};
`;
export const Filters = styled.ScrollView`
  flex-direction: row;
  margin-bottom: 7px;
`;
export const DescriptionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  font-style: italic;
  color: ${colors.gray};
`;
export const Description = styled.Text`
  font-size: 15px;
  font-style: italic;
  color: ${colors.lightGray};
  margin-top: 5px;
`;
export const BetNumbers = styled.View`
  padding: 5px 20px;
  width: 100%;
  flex: 1;
`;
export const Numbers = styled(FlatList as new () => FlatList)``;

export const SelectedNumbers = styled.View``;

export const GameOptions = styled.View`
  flex-direction: row;
`;
