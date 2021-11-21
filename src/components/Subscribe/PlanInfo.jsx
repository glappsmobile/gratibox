/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../shared/Button';
import Select from '../shared/Select';
import Group from '../shared/Group';
import Checkbox from '../shared/Checkbox';
import Card from '../shared/Card';
import Image03 from '../../assets/images/image03.png';
import colorPicker from '../../styles/utils/colorPicker';
import text from '../../styles/utils/text';
import spacing from '../../styles/utils/spacing';

const PlanInfo = ({
  formData, handleInputChange, handleCheckboxChange, setCurrentPage,
}) => (
  <div>
    <Card background="white">
      <Image src={Image03} alt="Plano semanal" />
      <Group paddingX="normal">
        <Select
          value={formData.plan}
          onChange={handleInputChange('plan')}
          margin="small"
        >
          <option value=""> Plano </option>
          <option value="1"> Semanal </option>
          <option value="2"> Mensal </option>
        </Select>

        <Select
          value={formData.deliveryDay}
          onChange={handleInputChange('deliveryDay')}
        >
          <option value=""> Entrega </option>
          {(formData.plan === '1') && (
            <>
              <option value="1"> Segunda </option>
              <option value="2"> Quarta </option>
              <option value="3"> Sexta </option>
            </>
          )}
          {(formData.plan === '2') && (
            <>
              <option value="1"> Dia 01 </option>
              <option value="2"> Dia 10 </option>
              <option value="3"> Dia 20 </option>
            </>
          )}
        </Select>
        <Box>
          <span>Quero receber</span>
          <ContainerCheckboxes>
            <Checkbox
              isChecked={formData.tea}
              onChange={handleCheckboxChange('tea')}
            >
              Chás
            </Checkbox>

            <Checkbox
              isChecked={formData.insenses}
              onChange={handleCheckboxChange('insenses')}
            >
              Insensos
            </Checkbox>

            <Checkbox
              isChecked={formData.organics}
              onChange={handleCheckboxChange('organics')}
            >
              Produtos organicos
            </Checkbox>
          </ContainerCheckboxes>
        </Box>
      </Group>
    </Card>
    <Button
      marginTop="large"
      fontSize="large"
      onClick={() => setCurrentPage(1)}
    >
      Próximo
    </Button>
  </div>
);

PlanInfo.propTypes = {
  formData: PropTypes.objectOf(PropTypes.any).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

const Image = styled.img`
  height: 172px;
  max-width: 100%;
  object-fit: fill;
`;

const ContainerCheckboxes = styled(Group)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
  padding-bottom: ${spacing('large')}
`;

const Box = styled.div`
  background: ${colorPicker('primaryLighter')};
  ${text('primaryDark', 'bold')};
  margin-top: ${spacing('small')};
  margin-bottom: ${spacing('normal')};
  padding: ${`${spacing('small')} ${spacing('normal')}`};
  border-radius: 5px;
  height: 110px;
  width: 100%;
  
  & {
    >span {
      width: 100%;
      display: flex;
    }
  }
`;
export default PlanInfo;
