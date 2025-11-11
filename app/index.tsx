import { ScrollView, Text, StyleSheet, Dimensions, Platform } from 'react-native';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Checkbox, CheckboxGroup, CheckboxIndicator, CheckboxIcon, CheckboxLabel } from '@/components/ui/checkbox';
import { Radio, RadioGroup, RadioIndicator, RadioIcon, RadioLabel } from '@/components/ui/radio';
import { CircleIcon, CheckIcon, ChevronDownIcon, EyeIcon } from '@/components/ui/icon';
import { FormControl, FormControlLabel, FormControlLabelText, FormControlHelper, FormControlHelperText } from '@/components/ui/form-control';
import { Select, SelectTrigger, SelectInput, SelectIcon, SelectPortal, SelectBackdrop, SelectContent, SelectDragIndicatorWrapper, SelectDragIndicator, SelectItem } from '@/components/ui/select';
import { Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Textarea, TextareaInput } from '@/components/ui/textarea';
import { Link, LinkText } from '@/components/ui/link';
import { Pressable } from '@/components/ui/pressable';
import { useState } from 'react';
import { ThemeProvider, useTheme } from '../assets/theme/theme-context';

export default function IndexScreen() {
  const { toolbarColor, setToolbarColor } = useTheme(); // Accede al color global

  const [checkboxValues, setCheckboxValues] = useState(['Eng']);
  const [radioValue, setRadioValue] = useState('Eng');
  const [selectValue, setSelectValue] = useState('');
  const [switchValue, setSwitchValue] = useState(true);

  const topSafeArea = Platform.OS === 'android' ? 24 : 44;

  return (
    <Box style={{ flex: 1, backgroundColor: '#FFF', paddingTop: topSafeArea }}>
      <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 120 }}>

        {/* Selector de color */}
        <HStack style={styles.colorRow}>
          {['#2196F3', '#4CAF50', '#F44336', '#9C27B0'].map(color => (
            <Button key={color} onPress={() => setToolbarColor(color)} style={[styles.colorButton, { backgroundColor: color }]}>
              <ButtonText style={{ color: '#FFF' }}>Click</ButtonText>
            </Button>
          ))}
        </HStack>

        {/* Checkbox */}
        <CheckboxGroup value={checkboxValues} onChange={setCheckboxValues}>
          <VStack space="xl">
            <Text style={{ color: '#000' }}>Selecciona alguno!</Text>
            <Checkbox value="1"><CheckboxIndicator><CheckboxIcon as={CheckIcon} /></CheckboxIndicator><CheckboxLabel style={{ color: '#000' }}>Juegos</CheckboxLabel></Checkbox>
            <Checkbox value="2"><CheckboxIndicator><CheckboxIcon as={CheckIcon} /></CheckboxIndicator><CheckboxLabel style={{ color: '#000' }}>Comida</CheckboxLabel></Checkbox>
            <Checkbox value="3"><CheckboxIndicator><CheckboxIcon as={CheckIcon} /></CheckboxIndicator><CheckboxLabel style={{ color: '#000' }}>Dormir</CheckboxLabel></Checkbox>
          </VStack>
        </CheckboxGroup>

        {/* Link */}
        <HStack style={{ marginVertical: 8, marginTop: 10, marginBottom: 10 }}>
          <Text style={{ color: '#000' }}>Visítanos&nbsp;</Text>
          <Link href="https://gluestack.io/" isExternal>
            <HStack>
              <LinkText style={{ color: '#2196F3' }}>Gluestack</LinkText>
              <EyeIcon color="#2196F3" />
            </HStack>
          </Link>
        </HStack>

        <Pressable className="p-5" style={[styles.press, { backgroundColor: '#E0E0E0' }]}>
          {({ pressed }) => <Text style={{ color: pressed ? '#2196F3' : '#000' }}>Juro que cambio de color</Text>}
        </Pressable>

        {/* Radio */}
        <FormControl>
          <FormControlLabel><FormControlLabelText style={{ color: '#000' }}>Idioma favorito</FormControlLabelText></FormControlLabel>
          <RadioGroup style={{ marginTop: 10, marginBottom: 10 }} value={radioValue} onChange={setRadioValue}>
            <VStack space="sm">
              <Radio value="Eng"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel style={{ color: '#000' }}>Inglés</RadioLabel></Radio>
              <Radio value="Es"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel style={{ color: '#000' }}>Español</RadioLabel></Radio>
              <Radio value="Jp"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel style={{ color: '#000' }}>Japonés</RadioLabel></Radio>
            </VStack>
          </RadioGroup>
        </FormControl>

        {/* Select */}
        <FormControl>
          <FormControlLabel style={{ marginTop: 10, marginBottom: 10 }}>
            <FormControlLabelText style={{ color: '#000' }}>Color favorito</FormControlLabelText>
          </FormControlLabel>
          <Select onValueChange={setSelectValue}>
            <SelectTrigger style={{ backgroundColor: '#F5F5F5' }}>
              <SelectInput placeholder="Selecciona un color" style={{ color: '#000' }} />
              <SelectIcon as={ChevronDownIcon} color="#000" />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent style={{ backgroundColor: '#FFF' }}>
                <SelectDragIndicatorWrapper><SelectDragIndicator /></SelectDragIndicatorWrapper>
                <SelectItem label="Rojo" value="Rojo" />
                <SelectItem label="Azul" value="Azul" />
                <SelectItem label="Negro" value="Negro" />
              </SelectContent>
            </SelectPortal>
          </Select>
          <FormControlHelper>
            <FormControlHelperText style={{ color: '#000' }}>Puedes seleccionar solo un color</FormControlHelperText>
          </FormControlHelper>
        </FormControl>

        {/* Slider */}
        <Slider minValue={0} maxValue={100} step={5} style={{ marginTop: 15, marginBottom: 10 }}>
          <SliderTrack><SliderFilledTrack /></SliderTrack>
          <SliderThumb />
        </Slider>

        {/* Switch */}
        <HStack space="md" style={{ alignItems: 'center', marginVertical: 8 }}>
          <Switch value={switchValue} onValueChange={setSwitchValue} />
          <Text style={{ color: '#000' }}>Clickeame!</Text>
        </HStack>

        {/* TextArea */}
        <FormControl>
          <FormControlLabel><FormControlLabelText style={{ color: '#000' }}>¿Algo que decirnos?</FormControlLabelText></FormControlLabel>
          <Textarea>
            <TextareaInput placeholder="Pista: escribe aquí..." style={{ color: '#000', backgroundColor: '#F5F5F5' }} />
          </Textarea>
          <FormControlHelper>
            <FormControlHelperText style={{ color: '#000' }}>¡Diviértete!</FormControlHelperText>
          </FormControlHelper>
        </FormControl>

      </ScrollView>
    </Box>
  );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  colorRow: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  colorButton: {
    flex: 1,
    marginHorizontal: 4,
    marginTop: 10,
    marginBottom: 10,
  },
  press: {
    marginTop: 10,
    marginBottom: 10,
  },
});
