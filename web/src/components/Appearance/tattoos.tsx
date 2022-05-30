import { useNuiState } from '../../hooks/nuiState';

import Section from './components/Section';
import Item from './components/Item';

import { tattoos, TattooSettings } from './interfaces';
import SelectInput from './components/SelectInput';

interface TattooData {
  settings: TattooSettings;
  storedData: tattoos;
  data: tattoos;
  handleTattooChange: (key: keyof TattooSettings, value: string) => void;
}

const TattooData = ({ settings, storedData, data, handleTattooChange}: TattooData) => {
  const { locales } = useNuiState();

  if (!locales) {
    return null;
  }

  return (
    <Section title={locales.tattoos.title}>
        <Item>
          <SelectInput
            title={locales.tattoos.ZONE_HEAD}
            items={settings.tattoos.ZONE_HEAD}
            defaultValue={data}
            clientValue={storedData}
            onChange={value => handleTattooChange(value)}
          />
          <SelectInput
            title={locales.tattoos.ZONE_LEFT_ARM}
            items={settings.tattoos.ZONE_LEFT_ARM}
            defaultValue={data}
            clientValue={storedData}
            onChange={value => handleTattooChange(value)}
          />
          <SelectInput
            title={locales.tattoos.ZONE_LEFT_LEG}
            items={settings.tattoos.ZONE_LEFT_LEG}
            defaultValue={data}
            clientValue={storedData}
            onChange={value => handleTattooChange(value)}
          /> 
          <SelectInput
            title={locales.tattoos.ZONE_RIGT_ARM}
            items={settings.tattoos.ZONE_RIGHT_ARM}
            defaultValue={data}
            clientValue={storedData}
            onChange={value => handleTattooChange(value)}
          />    
          <SelectInput
            title={locales.tattoos.ZONE_RIGT_LEG}
            items={settings.tattoos.ZONE_RIGT_LEG}
            defaultValue={data}
            clientValue={storedData}
            onChange={value => handleTattooChange(value)}
          />
          <SelectInput
            title={locales.tattoos.ZONE_TORSO}
            items={settings.tattoos.ZONE_TORSO}
            defaultValue={data}
            clientValue={storedData}
            onChange={value => handleTattooChange(value)}
          />                                  
      </Item>
    </Section>
  );
};

