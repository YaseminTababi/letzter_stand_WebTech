const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({
    vorname: {
        type: String,
        required: [true, 'Please add vorname']
    },
    nachname: {
        type: String,
        required: [true, 'Please add nachname']
    },
    email: {
        type: String,
        required: [true, 'Please add a email'],
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please enter a valid email'
        ]
    },
    fachbereich: {
        type: String,
        required: [true, 'Please add fachbereich_v']
    },
    thema: {
        type: String,
        required: [true, 'Please add thema']
    },
    telefonnummer: {
        type: String,
        required: [true, 'Please add telefonnummer_v no']
    },
    adresse: {
        type: String,
        required: [true, 'Please add adresse']
    },
    postleitzahl: {
        type: String,
        required: [true, 'Please add postleitzahl']
    },
    geburtsdatum: {
        type: String,
        required: [true, 'Please add geburtsdatum']
    },
    geburtsort: {
        type: String,
        required: [true, 'Please add geburtsort']
    },
    praktikum: {
        type: Boolean,
        required: [true, 'Please add praktikum']
    },
    praktikum_ende: {
        type: String
    },
    abschluss: {
        type: String,
        enum: ['Bachelor', 'Master'], 
        required: [true, 'Please add abschluss']
    },
    semester: {
        type: String,
        enum: ['Winter', 'Sommer'],
        required: [true, 'Please add semester']
    },
    betreuer_1: {
        name: {
            type: String,
            required: [true, 'Please add betreuer_1']
        },
        email: {
            type: String,
            required: [true, 'Please add a email'],
            match: [
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                'Please enter a valid email'
            ]
        },
        type: {
            type: String,
            enum: ['htw'],
            required: [true, 'Please add betreuer type'],
            default: 'htw'
        }
    },
    betreuer_2db: {
        type: Boolean,
        required: [true, 'Please select betreuer_2 option']
    },
    betreuer_2: {
        name: {
            type: String,
        },
        email: {
            type: String,
            match: [
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                'Please enter an email'
            ]
        },
        type: {
            type: String,
            enum: ['htw', 'extern'],

        }
    },
    angemeldet_am: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Student', StudentSchema);