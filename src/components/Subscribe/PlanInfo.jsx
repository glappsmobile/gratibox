/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import Button from '../shared/Button';
import Select from '../shared/Select';
import Group from '../shared/Group';
import Checkbox from '../shared/Checkbox';
import Form from '../shared/Form';
import Card from '../shared/Card';
import Image03 from '../../assets/images/image03.png';
import colorPicker from '../../styles/utils/colorPicker';
import text from '../../styles/utils/text';
import spacing from '../../styles/utils/spacing';

const PlanInfo = ({
  formData, handleInputChange, handleCheckboxChange, setCurrentPage,
}) => {
  const next = (e) => {
    e.preventDefault();

    const {
      tea, incense, organic,
    } = formData;

    if (!tea && !incense && !organic) {
      return Swal.fire({
        icon: 'warning',
        title: 'Preencha todos os campos',
        text: 'Informe ao menos um produto que deseja receber',
      });
    }

    return setCurrentPage(1);
  };
  return (
    <Form onSubmit={next}>
      <Card background="white">
        <Image src={Image03} alt="Plano semanal" />
        <Group paddingX="normal">
          <Select
            value={formData.plan}
            onChange={handleInputChange('plan')}
            margin="small"
            required
          >
            <option value=""> Plano </option>
            <option value="1"> Semanal </option>
            <option value="2"> Mensal </option>
          </Select>

          <Select
            value={formData.deliveryDay}
            onChange={handleInputChange('deliveryDay')}
            required
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
                isChecked={formData.incense}
                onChange={handleCheckboxChange('incense')}
              >
                Insensos
              </Checkbox>

              <Checkbox
                isChecked={formData.organic}
                onChange={handleCheckboxChange('organic')}
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
        type="submit"
      >
        Próximo
      </Button>
    </Form>
  );
};

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
