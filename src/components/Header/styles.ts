import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyles'

export const HeaderBar = styled.header`
  width: 100%;
  background-color: ${colors.lightPink};
  background-image: url('/src/assets/images/header_vector.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 40px 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 125px;
    margin: 0 auto;
  }
`

export const HeaderHome = styled.div`
  width: 100%;
  padding: 64px 0;
  background-color: ${colors.lightPink};
  background-image: url('/src/assets/images/header_vector.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;

  .logo {
    max-width: 125px;
    margin: 0 auto 138px;
  }

  h1 {
    font-size: 36px;
    font-weight: 900;
    color: ${colors.primary};
    max-width: 540px;
    margin: 0 auto;
    line-height: 42px;
  }
`

export const HeaderRestaurant = styled.div`
  position: relative;
  width: 100%;
  height: 280px;
  background-size: cover;
  background-position: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

export const HeaderContent = styled.div`
  position: relative;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 25px;
  padding-bottom: 32px;
  z-index: 1;
`

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 900;
  color: ${colors.primary};

  a {
    color: ${colors.primary};
  }

  span {
    cursor: pointer;
  }
`

export const RestaurantInfo = styled.div`
  h2 {
    font-size: 32px;
    font-weight: 100;
    color: ${colors.white};
    margin-bottom: 24px;
    text-transform: capitalize;
  }

  h1 {
    font-size: 32px;
    font-weight: 900;
    color: ${colors.white};
    margin: 0;
  }
`
