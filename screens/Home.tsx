import React, {useState} from "react";
import {View, ImageBackground, TouchableOpacity} from "react-native";
import CardStack, {Card} from "react-native-card-stack-swiper";
import {List, Filters, CardItem} from "../components";
import styles, {DISLIKE_ACTIONS, LIKE_ACTIONS} from "../assets/styles";
import DEMO from "../assets/data/demo";
import Icon from "../components/Icon";

const Home = () => {
    const [swiper, setSwiper] = useState<CardStack | null>(null);

    return (
        <ImageBackground
            source={require("../assets/images/bg.png")}
            style={styles.bg}
        >
            <View style={styles.containerHome}>
                <View style={styles.top}>
                    <Filters/>
                    <List/>
                </View>

                <CardStack
                    loop
                    verticalSwipe={false}
                    horizontalThreshold={30}
                    renderNoMoreCards={() => null}
                    ref={(newSwiper): void => setSwiper(newSwiper)}
                >
                    {DEMO.map((item) => (
                        <Card key={item.id}>
                            <CardItem
                                hasActions
                                image={item.image}
                                name={item.name}
                                description={item.description}
                                matches={item.match}
                            />
                        </Card>
                    ))}
                </CardStack>
            </View>
            {/* ACTIONS */}
            <View style={styles.actionsCardItem}>
                <TouchableOpacity style={styles.button} onPress={ () => { // @ts-ignore
                    swiper.swipeLeft() }}>
                    <Icon name="close" color={DISLIKE_ACTIONS} size={25}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={ () => { // @ts-ignore
                    swiper.swipeRight() }}>
                    <Icon name="gift" color={LIKE_ACTIONS} size={25}/>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default Home;
