import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const initState = {};
    return res.render('Layout', initState);
  } catch (error) {
    return console.error(error);
  }
});

router.get('/registration', (req, res) => {
  try {
    const initState = {};
    return res.render('Layout', initState);
  } catch (error) {
    return console.error(error);
  }
});

router.get('/authorization', (req, res) => {
  try {
    const initState = {};
    return res.render('Layout', initState);
  } catch (error) {
    return console.error(error);
  }
});

router.get('/tranding_news', (req, res) => {
  try {
    const initState = {};
    return res.render('Layout', initState);
  } catch (error) {
    return console.error(error);
  }
});

router.get('/crypto_news', (req, res) => {
  try {
    const initState = {};
    return res.render('Layout', initState);
  } catch (error) {
    return console.error(error);
  }
});

router.get('/finance_news', (req, res) => {
  try {
    const initState = {};
    return res.render('Layout', initState);
  } catch (error) {
    return console.error(error);
  }
});

export default router;
