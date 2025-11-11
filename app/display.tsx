import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Center } from '@/components/ui/center';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import { Heading } from '@/components/ui/heading';
import { Image } from '@/components/ui/image';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack'
import { Badge, BadgeText, BadgeIcon } from '@/components/ui/badge';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {
    Toast,
    ToastTitle,
    ToastDescription,
    useToast,
} from '@/components/ui/toast';


import {
    Table,
    TableHeader,
    TableFooter,
    TableBody,
    TableHead,
    TableData,
    TableRow,
    TableCaption,
} from '@/components/ui/table';
import { ScrollView, View } from 'react-native';
import React from 'react';

export default function App() {

    const toast = useToast();
    const [toastId, setToastId] = React.useState(0);
    const handleToast = () => {
        if (!toast.isActive(toastId)) {
            showNewToast();
        }
    };
    const showNewToast = () => {
        const newId = Math.random();
        setToastId(newId);
        toast.show({
            id: newId,
            placement: 'top',
            duration: 3000,
            render: ({ id }) => {
                const uniqueToastId = 'toast-' + id;
                return (
                    <Toast
                        nativeID={uniqueToastId}
                        action="muted"
                        variant="solid"
                        style={{
                            backgroundColor: '#B8F2E6', // verde menta claro
                            borderRadius: 12,
                            padding: 16,
                            flexDirection: 'row',
                            alignItems: 'center',
                            minWidth: 280,
                            elevation: 4,
                        }}
                    >
                        <MaterialIcons
                            name="gpp-good"
                            size={28}
                            color="#067D68" // verde más fuerte
                            style={{ marginRight: 12 }}
                        />
                        <View style={{ flex: 1 }}>
                            <ToastTitle
                                style={{
                                    color: '#067D68',
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    marginBottom: 4,
                                }}
                            >
                                Pedido confirmado
                            </ToastTitle>
                            <ToastDescription
                                style={{
                                    color: '#067D68',
                                    fontSize: 15,
                                }}
                            >
                                Tu producto se añadió con éxito al carrito!
                            </ToastDescription>
                        </View>
                    </Toast>
                );
            },
        });
    };
    return (
        <GluestackUIProvider>
            <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 120 }}>

                <Center style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Card className="p-5 rounded-lg max-w-[360px] m-3">

                        <Center style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image width={250} height={250}
                                source={{
                                    uri: 'https://gluestack.github.io/public-blog-video-assets/saree.png',
                                }}
                                className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
                                alt="image"
                            />
                        </Center>
                        <Text className="text-sm font-normal mb-2 text-typography-700">
                            Fashion Clothing
                        </Text>
                        <VStack className="mb-6">
                            <Heading size="md" className="mb-4">
                                Cotton Kurta
                            </Heading>
                            <Text size="sm">
                                Floral embroidered notch neck thread work cotton kurta in white and
                                black.
                            </Text>
                        </VStack>
                        <Box className="flex-col sm:flex-row">
                            <Button className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1" onPress={handleToast}>
                                <ButtonText size="sm">Add to cart</ButtonText>
                            </Button>
                            <Button
                                variant="outline"
                                className="px-4 py-2 border-outline-300 sm:flex-1"
                            >
                                <ButtonText size="sm" className="text-typography-600">
                                    Wishlist
                                </ButtonText>
                            </Button>
                        </Box>
                    </Card>
                </Center>

                <Box style={{ width: 100, height: 10 }} />
                <Center style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Card className="p-5 rounded-lg w-full">

                        <Box className="rounded-lg overflow-hidden w-full">
                            <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 120 }}>

                                <Table className="w-full">
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Pro</TableHead>
                                            <TableHead>Type</TableHead>
                                            <TableHead>Ava</TableHead>
                                            <TableHead>ST</TableHead>

                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableData>NS2</TableData>
                                            <TableData className="font-normal">Consola</TableData>
                                            <TableData className="font-normal">0</TableData>
                                            <TableData className="font-normal">
                                                <Badge size="lg" variant="outline" action="error">
                                                    <AntDesign name="exclamation-circle" size={24} color="black" />
                                                </Badge>
                                            </TableData>
                                        </TableRow>
                                        <TableRow>
                                            <TableData>PS5</TableData>
                                            <TableData className="font-normal">Consola</TableData>
                                            <TableData className="font-normal">3</TableData>
                                            <TableData className="font-normal">
                                                <Badge size="lg" variant="outline" action="info">
                                                    <AntDesign name="shopping-cart" size={24} color="black" />
                                                </Badge>
                                            </TableData>
                                        </TableRow>
                                        <TableRow>
                                            <TableData>Xbox</TableData>
                                            <TableData className="font-normal">Consola</TableData>
                                            <TableData className="font-normal">0</TableData>
                                            <TableData className="font-normal">
                                                <Badge size="lg" variant="outline" action="error">
                                                    <AntDesign name="exclamation-circle" size={24} color="black" />
                                                </Badge>
                                            </TableData>
                                        </TableRow>
                                        <TableRow>
                                            <TableData>PC</TableData>
                                            <TableData className="font-normal">Consola</TableData>
                                            <TableData className="font-normal">18</TableData>
                                            <TableData className="font-normal">
                                                <Badge size="lg" variant="outline" action="info">
                                                    <AntDesign name="shopping-cart" size={24} color="black" />
                                                </Badge>
                                            </TableData>
                                        </TableRow>
                                    </TableBody>
                                    <TableCaption className="font-normal">
                                        Showing recent stock details
                                    </TableCaption>
                                </Table>
                            </ScrollView>

                        </Box>
                    </Card>
                </Center>
            </ScrollView>
        </GluestackUIProvider>
    );
}
