const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const cors = require('cors');

const app = express();

const db = require('./conflig/db').Database;