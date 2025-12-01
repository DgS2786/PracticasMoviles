import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Box } from '@/components/ui/box';
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc, getDoc, setDoc, query, where } from 'firebase/firestore';
import { db } from '../assets/firebaseconfig';
import { Button, ButtonText } from '@/components/ui/button';
import { Input, InputField } from '@/components/ui/input';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Divider } from '@/components/ui/divider';
import { Spinner } from '@/components/ui/spinner';

type Item = {
    id: string;
    nombre: string;
    apellido: string;
    comida: string;
};

export default function App() {
    const [id, setId] = useState<string>('');
    const [nombre, setNombre] = useState<string>('');
    const [apellido, setApellido] = useState<string>('');
    const [comida, setComida] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [results, setResults] = useState<Item[]>([]);

    const insertItem = async () => {
        if (!id.trim() || !nombre.trim() || !apellido.trim() || !comida.trim()) return;
        await setDoc(doc(db, 'items', id), { nombre, apellido, comida });
        clearFields();
        setResults([]);
    };

    const updateItem = async () => {
        if (!id.trim()) return;
        await updateDoc(doc(db, 'items', id), { nombre, apellido, comida });
        clearFields();
        setResults([]);
    };

    const deleteItem = async () => {
        if (!id.trim()) return;
        await deleteDoc(doc(db, 'items', id));
        clearFields();
        setResults([]);
    };

    const searchItem = async () => {
        setLoading(true);
        setResults([]);

        if (id.trim()) {
            const snap = await getDoc(doc(db, 'items', id));
            if (snap.exists()) {
                const data = snap.data() as Omit<Item, "id">;
                setResults([{ id, ...data }]);
            }
            setLoading(false);
            return;
        }

        if (nombre.trim()) {
            const q = query(collection(db, 'items'), where("nombre", "==", nombre));
            const snapshot = await getDocs(q);

            const list: Item[] = snapshot.docs.map((d) => ({
                id: d.id,
                ...(d.data() as { nombre: string; apellido: string; comida: string })
            }));

            setResults(list);
        }

        setLoading(false);
    };

    const clearFields = () => {
        setId('');
        setNombre('');
        setApellido('');
        setComida('');
    };

    return (
        <SafeAreaView>
            <Box className="p-5">
                <Text size="xl" className="mb-3">CRUD Firebase + Gluestack (Búsqueda manual)</Text>

                <VStack space="md">

                    <Input>
                        <InputField
                            placeholder="ID (manual)"
                            value={id}
                            onChangeText={setId}
                        />
                    </Input>

                    <Input>
                        <InputField
                            placeholder="Nombre"
                            value={nombre}
                            onChangeText={setNombre}
                        />
                    </Input>

                    <Input>
                        <InputField
                            placeholder="Apellido"
                            value={apellido}
                            onChangeText={setApellido}
                        />
                    </Input>

                    <Input>
                        <InputField
                            placeholder="Comida"
                            value={comida}
                            onChangeText={setComida}
                        />
                    </Input>

                    <HStack space="md" className="flex-wrap">
                        <Button action="positive" onPress={insertItem}>
                            <ButtonText>Insertar</ButtonText>
                        </Button>

                        <Button action="secondary" onPress={updateItem}>
                            <ButtonText>Actualizar</ButtonText>
                        </Button>

                        <Button action="negative" onPress={deleteItem}>
                            <ButtonText>Eliminar</ButtonText>
                        </Button>

                        <Button action="primary" onPress={searchItem}>
                            <ButtonText>Buscar</ButtonText>
                        </Button>
                    </HStack>

                </VStack>

                <Divider className="my-6" />

                <Text size="lg" className="mb-3">Resultado</Text>

                {loading ? (
                    <Spinner />
                ) : (
                    <VStack space="md">
                        {results.map((item) => (
                            <Box key={item.id} className="p-3 border rounded-xl">
                                <Text>ID: {item.id}</Text>
                                <Text>Nombre: {item.nombre}</Text>
                                <Text>Apellido: {item.apellido}</Text>
                                <Text>Comida: {item.comida}</Text>
                            </Box>
                        ))}

                        {results.length === 0 && (
                            <Text>No hay resultados</Text>
                        )}
                    </VStack>
                )}
            </Box>
        </SafeAreaView>
    );
}
