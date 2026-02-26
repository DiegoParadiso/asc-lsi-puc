// Each correlative is now an object: { id: 'XXXX', condition: 'Regularizada' | 'Aprobada' }
// toCourse = requirements to be allowed to attend (cursar)
// toApprove = requirements to be allowed to take the final exam (aprobar)

export const studyPlans = {
    analista: {
        id: 'analista-2010',
        name: 'Analista en Sistemas de Computación (2010)',
        subjects: [
            { id: 'AS101', name: 'ALGORITMO Y ESTRUCTURA DE DATOS I', year: 1, period: '1° anual', status: 'Aprobado', grade: 8, correlatives: { toCourse: [], toApprove: [] } },
            { id: 'AS102', name: 'INGLES TECNICO I', year: 1, period: '1° anual', status: 'Aprobado', grade: 10, correlatives: { toCourse: [], toApprove: [] } },
            { id: 'AS103', name: 'MATEMATICA I', year: 1, period: '1er.Cuatrimestre', status: 'Regularizada', grade: null, correlatives: { toCourse: [], toApprove: [] } },
            { id: 'AS104', name: 'INTRODUCCION A LA INFORMATICA', year: 1, period: '1er.Cuatrimestre', status: 'Aprobado', grade: 7, correlatives: { toCourse: [], toApprove: [] } },
            { id: 'AS105', name: 'SISTEMAS ADMINISTRATIVOS I', year: 1, period: '1er.Cuatrimestre', status: 'Aprobado', grade: 6, correlatives: { toCourse: [], toApprove: [] } },
            {
                id: 'AS106', name: 'ARQUITECTURA DE COMPUTADORAS', year: 1, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'AS104', condition: 'Regularizada' }],
                    toApprove: [{ id: 'AS104', condition: 'Aprobada' }]
                }
            },
            {
                id: 'AS107', name: 'MATEMATICA II', year: 1, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'AS103', condition: 'Regularizada' }],
                    toApprove: [{ id: 'AS103', condition: 'Aprobada' }]
                }
            },
            {
                id: 'AS108', name: 'ESTADISTICA I', year: 1, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'AS103', condition: 'Regularizada' }],
                    // Official plan: toApprove also only requires Regularizada for this subject
                    toApprove: [{ id: 'AS103', condition: 'Regularizada' }]
                }
            },
            {
                id: 'AS201', name: 'ALGORITMO Y ESTRUCTURA DE DATOS II', year: 2, period: '1er.Cuatrimestre', status: 'Aprobado', grade: 6,
                correlatives: {
                    toCourse: [{ id: 'AS101', condition: 'Regularizada' }],
                    toApprove: [{ id: 'AS101', condition: 'Aprobada' }]
                }
            },
            {
                id: 'AS202', name: 'INGLES TECNICO II', year: 2, period: '1° anual', status: 'En Curso', grade: null,
                correlatives: {
                    toCourse: [{ id: 'AS102', condition: 'Regularizada' }],
                    toApprove: [{ id: 'AS102', condition: 'Aprobada' }]
                }
            },
            {
                id: 'AS203', name: 'MATEMATICA III', year: 2, period: '1er.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'AS107', condition: 'Regularizada' }],
                    toApprove: [{ id: 'AS107', condition: 'Aprobada' }]
                }
            },
            {
                id: 'AS204', name: 'SEMINARIO DE LENGUAJES I', year: 2, period: '1er.Cuatrimestre', status: 'Aprobado', grade: 9,
                correlatives: {
                    toCourse: [{ id: 'AS101', condition: 'Regularizada' }],
                    toApprove: [{ id: 'AS101', condition: 'Aprobada' }]
                }
            },
            {
                id: 'AS205', name: 'ESTADISTICA II', year: 2, period: '1er.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'AS108', condition: 'Regularizada' }],
                    toApprove: [{ id: 'AS108', condition: 'Aprobada' }]
                }
            },
            {
                id: 'AS206', name: 'INTRODUCCION A LAS BASES DE DATOS', year: 2, period: '2do.Cuatrimestre', status: 'Aprobado', grade: 8,
                correlatives: {
                    toCourse: [{ id: 'AS101', condition: 'Regularizada' }],
                    toApprove: [{ id: 'AS101', condition: 'Aprobada' }]
                }
            },
            {
                id: 'AS207', name: 'SEMINARIO DE LENGUAJES II', year: 2, period: '2do.Cuatrimestre', status: 'Aprobado', grade: 9,
                correlatives: {
                    toCourse: [{ id: 'AS204', condition: 'Regularizada' }],
                    toApprove: [{ id: 'AS204', condition: 'Aprobada' }]
                }
            },
            {
                id: 'AS208', name: 'INTRODUCCION AL ANALISIS DE SISTEMAS', year: 2, period: '2do.Cuatrimestre', status: 'Regularizada', grade: null,
                correlatives: {
                    toCourse: [{ id: 'AS105', condition: 'Regularizada' }, { id: 'AS101', condition: 'Regularizada' }],
                    toApprove: [{ id: 'AS105', condition: 'Aprobada' }, { id: 'AS101', condition: 'Aprobada' }]
                }
            },
            {
                id: 'AS209', name: 'SISTEMAS ADMINISTRATIVOS II', year: 2, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'AS105', condition: 'Aprobada' }],
                    toApprove: [{ id: 'AS105', condition: 'Aprobada' }]
                }
            },
            {
                id: 'AS210', name: 'SISTEMAS OPERATIVOS', year: 2, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'AS106', condition: 'Aprobada' }],
                    toApprove: [{ id: 'AS106', condition: 'Aprobada' }]
                }
            },
            {
                id: 'AS301', name: 'ANALISIS DE SISTEMAS', year: 3, period: '1er.Cuatrimestre', status: 'En Curso', grade: null,
                correlatives: {
                    toCourse: [{ id: 'AS208', condition: 'Regularizada' }, { id: 'AS206', condition: 'Regularizada' }],
                    toApprove: [{ id: 'AS208', condition: 'Aprobada' }, { id: 'AS206', condition: 'Aprobada' }]
                }
            },
            {
                id: 'AS302', name: 'ACTUALIDAD INFORMATICA', year: 3, period: '1er.Cuatrimestre', status: 'En Curso', grade: null,
                correlatives: {
                    toCourse: [
                        { id: 'AS206', condition: 'Regularizada' },
                        { id: 'AS204', condition: 'Aprobada' },
                        { id: 'AS201', condition: 'Aprobada' },
                        { id: 'AS208', condition: 'Regularizada' }
                    ],
                    toApprove: [
                        { id: 'AS206', condition: 'Aprobada' },
                        { id: 'AS204', condition: 'Aprobada' },
                        { id: 'AS201', condition: 'Aprobada' },
                        { id: 'AS208', condition: 'Aprobada' }
                    ]
                }
            },
            {
                id: 'AS303', name: 'BASE DE DATOS', year: 3, period: '1er.Cuatrimestre', status: 'En Curso', grade: null,
                correlatives: {
                    toCourse: [{ id: 'AS206', condition: 'Regularizada' }, { id: 'AS207', condition: 'Regularizada' }],
                    toApprove: [{ id: 'AS206', condition: 'Aprobada' }, { id: 'AS207', condition: 'Aprobada' }]
                }
            },
            {
                id: 'AS304', name: 'COMUNICACION Y REDES I', year: 3, period: '1er.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'AS106', condition: 'Aprobada' }],
                    toApprove: [{ id: 'AS106', condition: 'Aprobada' }]
                }
            },
            {
                id: 'AS305', name: 'SISTEMAS DE INFORMACION', year: 3, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [
                        { id: 'AS106', condition: 'Regularizada' },
                        { id: 'AS208', condition: 'Regularizada' },
                        { id: 'AS105', condition: 'Regularizada' }
                    ],
                    toApprove: [
                        { id: 'AS106', condition: 'Aprobada' },
                        { id: 'AS105', condition: 'Aprobada' },
                        { id: 'AS208', condition: 'Aprobada' }
                    ]
                }
            },
            {
                id: 'AS306', name: 'COMUNICACION Y REDES II', year: 3, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'AS304', condition: 'Regularizada' }],
                    toApprove: [{ id: 'AS304', condition: 'Aprobada' }]
                }
            },
            {
                id: 'AS307', name: 'INVESTIGACION OPERATIVA', year: 3, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'AS203', condition: 'Regularizada' }],
                    toApprove: [{ id: 'AS203', condition: 'Aprobada' }]
                }
            },
            {
                id: 'AS308', name: 'TRABAJO FINAL', year: 3, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [
                        { id: 'AS204', condition: 'Regularizada' },
                        { id: 'AS206', condition: 'Regularizada' },
                        { id: 'AS208', condition: 'Regularizada' },
                        { id: 'AS209', condition: 'Regularizada' }
                    ],
                    toApprove: [
                        { id: 'AS204', condition: 'Aprobada' },
                        { id: 'AS206', condition: 'Aprobada' },
                        { id: 'AS208', condition: 'Aprobada' },
                        { id: 'AS209', condition: 'Aprobada' }
                    ]
                }
            }
        ]
    },
    licenciatura: {
        id: 'licenciatura-2013',
        name: 'Licenciatura en Sistemas de Información (2013)',
        subjects: [
            { id: 'L1301', name: 'MATEMATICA I', year: 1, period: '1er.Cuatrimestre', status: 'Regularizada', grade: null, correlatives: { toCourse: [], toApprove: [] } },
            { id: 'L1302', name: 'ALGORITMOS Y ESTRUCTURAS DE DATOS I', year: 1, period: '1° anual', status: 'Aprobado', grade: 8, correlatives: { toCourse: [], toApprove: [] } },
            { id: 'L1303', name: 'INTRODUCCION A LA INFORMATICA', year: 1, period: '1er.Cuatrimestre', status: 'Aprobado', grade: 7, correlatives: { toCourse: [], toApprove: [] } },
            { id: 'L1304', name: 'SISTEMAS Y ORGANIZACION', year: 1, period: '1er.Cuatrimestre', status: 'Aprobado', grade: 6, correlatives: { toCourse: [], toApprove: [] } },
            { id: 'L1305', name: 'INGLES TECNICO I', year: 1, period: '1° anual', status: 'Aprobado', grade: 10, correlatives: { toCourse: [], toApprove: [] } },
            {
                id: 'L1306', name: 'MATEMATICA II', year: 1, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'L1301', condition: 'Regularizada' }],
                    toApprove: [{ id: 'L1301', condition: 'Aprobada' }]
                }
            },
            { id: 'L1307', name: 'ESTADISTICA I', year: 1, period: '2do.Cuatrimestre', status: '', grade: null, correlatives: { toCourse: [], toApprove: [] } },
            {
                id: 'L1308', name: 'ARQUITECTURA DE COMPUTADORAS', year: 1, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'L1301', condition: 'Regularizada' }, { id: 'L1303', condition: 'Regularizada' }],
                    toApprove: [{ id: 'L1301', condition: 'Aprobada' }, { id: 'L1303', condition: 'Aprobada' }]
                }
            },
            {
                id: 'L1309', name: 'MATEMATICA III', year: 2, period: '1er.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'L1306', condition: 'Regularizada' }],
                    toApprove: [{ id: 'L1306', condition: 'Aprobada' }]
                }
            },
            {
                id: 'L1310', name: 'ESTADISTICA II', year: 2, period: '1er.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'L1307', condition: 'Regularizada' }],
                    toApprove: [{ id: 'L1307', condition: 'Aprobada' }]
                }
            },
            {
                id: 'L1311', name: 'ALGORITMOS Y ESTRUCTURAS DE DATOS II', year: 2, period: '1er.Cuatrimestre', status: 'Aprobado', grade: 6,
                correlatives: {
                    toCourse: [{ id: 'L1302', condition: 'Regularizada' }],
                    toApprove: [{ id: 'L1302', condition: 'Aprobada' }]
                }
            },
            {
                id: 'L1312', name: 'SEMINARIO DE LENGUAJES I', year: 2, period: '1er.Cuatrimestre', status: 'Aprobado', grade: 9,
                correlatives: {
                    toCourse: [{ id: 'L1302', condition: 'Regularizada' }],
                    toApprove: [{ id: 'L1302', condition: 'Aprobada' }]
                }
            },
            {
                id: 'L1313', name: 'INGLES TECNICO II', year: 2, period: '1° anual', status: 'En Curso', grade: null,
                correlatives: {
                    toCourse: [{ id: 'L1305', condition: 'Regularizada' }],
                    toApprove: [{ id: 'L1305', condition: 'Aprobada' }]
                }
            },
            {
                id: 'L1314', name: 'SISTEMAS OPERATIVOS', year: 2, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'L1311', condition: 'Regularizada' }, { id: 'L1308', condition: 'Aprobada' }],
                    toApprove: [{ id: 'L1311', condition: 'Aprobada' }, { id: 'L1308', condition: 'Aprobada' }]
                }
            },
            {
                id: 'L1315', name: 'SEMINARIO DE LENGUAJES II', year: 2, period: '2do.Cuatrimestre', status: 'Aprobado', grade: 9,
                correlatives: {
                    toCourse: [{ id: 'L1312', condition: 'Regularizada' }, { id: 'L1302', condition: 'Aprobada' }],
                    toApprove: [{ id: 'L1312', condition: 'Aprobada' }, { id: 'L1302', condition: 'Aprobada' }]
                }
            },
            {
                id: 'L1316', name: 'INGENIERIA DE SOFTWARE I', year: 2, period: '2do.Cuatrimestre', status: 'Regularizada', grade: null,
                correlatives: {
                    toCourse: [{ id: 'L1302', condition: 'Regularizada' }, { id: 'L1304', condition: 'Aprobada' }],
                    toApprove: [{ id: 'L1302', condition: 'Aprobada' }, { id: 'L1304', condition: 'Aprobada' }]
                }
            },
            {
                id: 'L1317', name: 'SISTEMAS ADMINISTRATIVOS', year: 2, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'L1304', condition: 'Regularizada' }],
                    toApprove: [{ id: 'L1304', condition: 'Aprobada' }]
                }
            },
            {
                id: 'L1318', name: 'INTRODUCCION A LAS BASES DE DATOS', year: 2, period: '2do.Cuatrimestre', status: 'Aprobado', grade: 8,
                correlatives: {
                    toCourse: [{ id: 'L1311', condition: 'Regularizada' }, { id: 'L1302', condition: 'Aprobada' }],
                    toApprove: [{ id: 'L1302', condition: 'Aprobada' }, { id: 'L1311', condition: 'Aprobada' }]
                }
            },
            {
                id: 'L1319', name: 'PROGRAMACION ORIENTADA A OBJETOS I', year: 3, period: '1er.Cuatrimestre', status: 'Aprobado', grade: 9,
                correlatives: {
                    toCourse: [{ id: 'L1311', condition: 'Regularizada' }, { id: 'L1312', condition: 'Regularizada' }],
                    toApprove: [{ id: 'L1311', condition: 'Aprobada' }, { id: 'L1312', condition: 'Aprobada' }]
                }
            },
            {
                id: 'L1320', name: 'COMUNICACION Y REDES I', year: 3, period: '1er.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'L1308', condition: 'Aprobada' }],
                    toApprove: [{ id: 'L1308', condition: 'Aprobada' }]
                }
            },
            {
                id: 'L1321', name: 'INGENIERIA DE SOFTWARE II', year: 3, period: '1er.Cuatrimestre', status: 'En Curso', grade: null,
                correlatives: {
                    toCourse: [{ id: 'L1316', condition: 'Regularizada' }, { id: 'L1318', condition: 'Aprobada' }],
                    toApprove: [{ id: 'L1316', condition: 'Aprobada' }, { id: 'L1318', condition: 'Aprobada' }]
                }
            },
            {
                id: 'L1322', name: 'BASE DE DATOS', year: 3, period: '1er.Cuatrimestre', status: 'En Curso', grade: null,
                correlatives: {
                    toCourse: [{ id: 'L1318', condition: 'Regularizada' }],
                    toApprove: [{ id: 'L1318', condition: 'Aprobada' }]
                }
            },
            {
                id: 'L1323', name: 'MATEMATICA IV', year: 3, period: '1er.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'L1309', condition: 'Regularizada' }],
                    toApprove: [{ id: 'L1309', condition: 'Aprobada' }]
                }
            },
            {
                id: 'L1324', name: 'INVESTIGACION OPERATIVA', year: 3, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'L1310', condition: 'Regularizada' }, { id: 'L1309', condition: 'Regularizada' }],
                    toApprove: [{ id: 'L1310', condition: 'Aprobada' }, { id: 'L1309', condition: 'Aprobada' }]
                }
            },
            {
                id: 'L1325', name: 'PROGRAMACION ORIENTADAS A OBJETOS II', year: 3, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'L1319', condition: 'Regularizada' }, { id: 'L1311', condition: 'Aprobada' }],
                    toApprove: [{ id: 'L1311', condition: 'Aprobada' }, { id: 'L1319', condition: 'Aprobada' }]
                }
            },
            {
                id: 'L1326', name: 'PROYECTO DE SOFTWARE', year: 3, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [
                        { id: 'L1318', condition: 'Regularizada' },
                        { id: 'L1317', condition: 'Regularizada' },
                        { id: 'L1316', condition: 'Regularizada' },
                        { id: 'L1309', condition: 'Regularizada' }
                    ],
                    toApprove: [
                        { id: 'L1318', condition: 'Aprobada' },
                        { id: 'L1317', condition: 'Aprobada' },
                        { id: 'L1316', condition: 'Aprobada' },
                        { id: 'L1309', condition: 'Aprobada' }
                    ]
                }
            },
            {
                id: 'L1327', name: 'COMUNICACION Y REDES II', year: 3, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'L1320', condition: 'Regularizada' }],
                    toApprove: [{ id: 'L1320', condition: 'Aprobada' }]
                }
            },
            {
                id: 'L1328', name: 'SISTEMAS DE INFORMACION', year: 3, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'L1308', condition: 'Aprobada' }, { id: 'L1317', condition: 'Regularizada' }],
                    toApprove: [{ id: 'L1308', condition: 'Aprobada' }, { id: 'L1317', condition: 'Aprobada' }]
                }
            },
            {
                id: 'L1329', name: 'INGENIERIA DE SOFTWARE III', year: 4, period: '1er.Cuatrimestre', status: 'En Curso', grade: null,
                correlatives: {
                    toCourse: [
                        { id: 'L1318', condition: 'Regularizada' },
                        { id: 'L1312', condition: 'Aprobada' },
                        { id: 'L1311', condition: 'Aprobada' },
                        { id: 'L1316', condition: 'Regularizada' }
                    ],
                    toApprove: [
                        { id: 'L1316', condition: 'Aprobada' },
                        { id: 'L1311', condition: 'Aprobada' },
                        { id: 'L1312', condition: 'Aprobada' },
                        { id: 'L1318', condition: 'Aprobada' }
                    ]
                }
            },
            {
                id: 'L1330', name: 'DISEÑO Y APLICACIONES EN LA WEB', year: 4, period: '1er.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'L1321', condition: 'Regularizada' }],
                    toApprove: [{ id: 'L1321', condition: 'Aprobada' }]
                }
            },
            {
                id: 'L1331', name: 'SISTEMAS DISTRIBUIDOS', year: 4, period: '1er.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [
                        { id: 'L1314', condition: 'Aprobada' },
                        { id: 'L1327', condition: 'Regularizada' },
                        { id: 'L1322', condition: 'Regularizada' }
                    ],
                    toApprove: [
                        { id: 'L1314', condition: 'Aprobada' },
                        { id: 'L1327', condition: 'Regularizada' },
                        { id: 'L1322', condition: 'Aprobada' }
                    ]
                }
            },
            {
                id: 'L1332', name: 'TEORIA DE LA COMPUTACION', year: 4, period: '1er.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'L1319', condition: 'Regularizada' }, { id: 'L1316', condition: 'Aprobada' }],
                    toApprove: [{ id: 'L1319', condition: 'Aprobada' }, { id: 'L1321', condition: 'Aprobada' }]
                }
            },
            {
                id: 'L1333', name: 'MODELO Y SIMULACION', year: 4, period: '1er.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [
                        { id: 'L1324', condition: 'Regularizada' },
                        { id: 'L1321', condition: 'Regularizada' },
                        { id: 'L1310', condition: 'Aprobada' }
                    ],
                    toApprove: [
                        { id: 'L1324', condition: 'Aprobada' },
                        { id: 'L1321', condition: 'Aprobada' },
                        { id: 'L1310', condition: 'Aprobada' }
                    ]
                }
            },
            {
                id: 'L1334', name: 'METODOLOGIA DE LA INVESTIGACION', year: 4, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'L1323', condition: 'Regularizada' }],
                    toApprove: [{ id: 'L1323', condition: 'Aprobada' }]
                }
            },
            {
                id: 'L1335', name: 'INTELIGENCIA ARTIFICIAL Y SISTEMAS EXPERTOS', year: 4, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'L1332', condition: 'Regularizada' }, { id: 'L1323', condition: 'Aprobada' }],
                    toApprove: [{ id: 'L1332', condition: 'Aprobada' }, { id: 'L1323', condition: 'Aprobada' }]
                }
            },
            {
                id: 'L1336', name: 'AUDITORIA EN INFORMATICA', year: 4, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [
                        { id: 'L1328', condition: 'Regularizada' },
                        { id: 'L1317', condition: 'Aprobada' },
                        { id: 'L1329', condition: 'Regularizada' }
                    ],
                    toApprove: [
                        { id: 'L1328', condition: 'Aprobada' },
                        { id: 'L1317', condition: 'Aprobada' },
                        { id: 'L1329', condition: 'Aprobada' }
                    ]
                }
            },
            {
                id: 'L1337', name: 'PARADIGMAS Y LENGUAJES DE PROGRAMACION', year: 4, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'L1331', condition: 'Regularizada' }, { id: 'L1325', condition: 'Regularizada' }],
                    toApprove: [{ id: 'L1325', condition: 'Aprobada' }, { id: 'L1331', condition: 'Aprobada' }]
                }
            },
            {
                id: 'L1338', name: 'PLANEAMIENTO Y CONTROL DE GESTION', year: 5, period: '1er.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [
                        { id: 'L1304', condition: 'Aprobada' },
                        { id: 'L1328', condition: 'Aprobada' },
                        { id: 'L1336', condition: 'Regularizada' }
                    ],
                    toApprove: [
                        { id: 'L1304', condition: 'Aprobada' },
                        { id: 'L1328', condition: 'Aprobada' },
                        { id: 'L1336', condition: 'Aprobada' }
                    ]
                }
            },
            {
                id: 'L1339', name: 'RECURSOS HUMANOS', year: 5, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'L1338', condition: 'Regularizada' }],
                    toApprove: [{ id: 'L1338', condition: 'Aprobada' }]
                }
            },
            {
                id: 'L1340', name: 'TESIS DE GRADO', year: 5, period: '1° anual', status: '', grade: null,
                correlatives: {
                    toCourse: [
                        { id: 'L1315', condition: 'Aprobada' },
                        { id: 'L1316', condition: 'Aprobada' },
                        { id: 'L1314', condition: 'Aprobada' },
                        { id: 'L1321', condition: 'Regularizada' },
                        { id: 'L1322', condition: 'Regularizada' },
                        { id: 'L1324', condition: 'Regularizada' },
                        { id: 'L1325', condition: 'Regularizada' },
                        { id: 'L1327', condition: 'Regularizada' },
                        { id: 'L1328', condition: 'Aprobada' },
                        { id: 'L1329', condition: 'Regularizada' },
                        { id: 'L1330', condition: 'Regularizada' },
                        { id: 'L1334', condition: 'Regularizada' },
                        { id: 'L1333', condition: 'Regularizada' },
                        { id: 'L1335', condition: 'Regularizada' },
                        { id: 'L1336', condition: 'Regularizada' },
                        { id: 'L1331', condition: 'Regularizada' },
                        { id: 'L1337', condition: 'Regularizada' }
                    ],
                    toApprove: [
                        { id: 'L1315', condition: 'Aprobada' },
                        { id: 'L1316', condition: 'Aprobada' },
                        { id: 'L1314', condition: 'Aprobada' },
                        { id: 'L1321', condition: 'Aprobada' },
                        { id: 'L1322', condition: 'Aprobada' },
                        { id: 'L1324', condition: 'Aprobada' },
                        { id: 'L1327', condition: 'Aprobada' },
                        { id: 'L1328', condition: 'Aprobada' },
                        { id: 'L1329', condition: 'Aprobada' },
                        { id: 'L1330', condition: 'Aprobada' },
                        { id: 'L1334', condition: 'Aprobada' },
                        { id: 'L1333', condition: 'Aprobada' },
                        { id: 'L1335', condition: 'Aprobada' },
                        { id: 'L1336', condition: 'Aprobada' },
                        { id: 'L1331', condition: 'Aprobada' },
                        { id: 'L1337', condition: 'Aprobada' },
                        { id: 'L1325', condition: 'Aprobada' }
                    ]
                }
            }
        ]
    },
    profesorado: {
        id: 'profesorado-2015',
        name: 'Profesorado Universitario en Computación (2015)',
        subjects: [
            { id: 'PC100', name: 'ALGORITMOS Y ESTRUCTURAS DE DATOS I', year: 1, period: '1° anual', status: '', grade: null, correlatives: { toCourse: [], toApprove: [] } },
            { id: 'PC101', name: 'INGLES TECNICO I', year: 1, period: '1° anual', status: '', grade: null, correlatives: { toCourse: [], toApprove: [] } },
            { id: 'PC102', name: 'MATEMATICA I', year: 1, period: '1er.Cuatrimestre', status: '', grade: null, correlatives: { toCourse: [], toApprove: [] } },
            { id: 'PC103', name: 'INTRODUCCION A LA INFORMATICA', year: 1, period: '1er.Cuatrimestre', status: '', grade: null, correlatives: { toCourse: [], toApprove: [] } },
            { id: 'PC104', name: 'SISTEMAS ADMINISTRATIVOS', year: 1, period: '1er.Cuatrimestre', status: '', grade: null, correlatives: { toCourse: [], toApprove: [] } },
            {
                id: 'PC105', name: 'MATEMATICA II', year: 1, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'PC102', condition: 'Regularizada' }],
                    toApprove: [{ id: 'PC102', condition: 'Aprobada' }]
                }
            },
            {
                id: 'PC106', name: 'ARQUITECTURA DE COMPUTADORAS', year: 1, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'PC102', condition: 'Regularizada' }, { id: 'PC103', condition: 'Regularizada' }],
                    toApprove: [{ id: 'PC102', condition: 'Aprobada' }, { id: 'PC103', condition: 'Aprobada' }]
                }
            },
            { id: 'PC107', name: 'ORIENTACION Y PROFESION DOCENTE', year: 1, period: '2do.Cuatrimestre', status: '', grade: null, correlatives: { toCourse: [], toApprove: [] } },
            {
                id: 'PC200', name: 'PROBLEMATICA EDUCATIVA', year: 2, period: '1° anual', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'PC107', condition: 'Regularizada' }],
                    toApprove: [{ id: 'PC107', condition: 'Aprobada' }]
                }
            },
            {
                id: 'PC201', name: 'MATEMATICA III', year: 2, period: '1er.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'PC105', condition: 'Regularizada' }],
                    toApprove: [{ id: 'PC105', condition: 'Aprobada' }]
                }
            },
            {
                id: 'PC202', name: 'ALGORITMOS Y ESTRUCTURAS DE DATOS II', year: 2, period: '1er.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'PC100', condition: 'Regularizada' }],
                    toApprove: [{ id: 'PC100', condition: 'Aprobada' }]
                }
            },
            {
                id: 'PC203', name: 'SEMINARIO DE LENGUAJES I', year: 2, period: '1er.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'PC100', condition: 'Regularizada' }],
                    toApprove: [{ id: 'PC100', condition: 'Aprobada' }]
                }
            },
            {
                id: 'PC204', name: 'SEMINARIO DE LENGUAJES II', year: 2, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'PC203', condition: 'Regularizada' }],
                    toApprove: [{ id: 'PC203', condition: 'Aprobada' }]
                }
            },
            {
                id: 'PC205', name: 'SISTEMAS OPERATIVOS', year: 2, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'PC106', condition: 'Regularizada' }],
                    toApprove: [{ id: 'PC106', condition: 'Aprobada' }]
                }
            },
            {
                id: 'PC206', name: 'INTRODUCCION AL ANALISIS DE SISTEMAS', year: 2, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'PC100', condition: 'Regularizada' }],
                    toApprove: [{ id: 'PC100', condition: 'Aprobada' }]
                }
            },
            {
                id: 'PC207', name: 'INTRODUCCION A LAS BASES DE DATOS', year: 2, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'PC100', condition: 'Regularizada' }],
                    toApprove: [{ id: 'PC100', condition: 'Aprobada' }]
                }
            },
            {
                id: 'PC208', name: 'PRACTICA PROFESIONAL I', year: 2, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'PC107', condition: 'Regularizada' }],
                    toApprove: [{ id: 'PC107', condition: 'Aprobada' }]
                }
            },
            {
                id: 'PC300', name: 'QUEHACER DIDACTICO', year: 3, period: '1° anual', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'PC107', condition: 'Aprobada' }, { id: 'PC200', condition: 'Regularizada' }, { id: 'PC208', condition: 'Regularizada' }],
                    toApprove: [{ id: 'PC107', condition: 'Aprobada' }, { id: 'PC200', condition: 'Aprobada' }, { id: 'PC208', condition: 'Aprobada' }]
                }
            },
            {
                id: 'PC301', name: 'DIDACTICA DE LA INFORMATICA', year: 3, period: '1° anual', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'PC107', condition: 'Aprobada' }, { id: 'PC200', condition: 'Regularizada' }],
                    toApprove: [{ id: 'PC107', condition: 'Aprobada' }, { id: 'PC200', condition: 'Aprobada' }]
                }
            },
            {
                id: 'PC302', name: 'COMUNICACION Y REDES I', year: 3, period: '1er.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'PC106', condition: 'Regularizada' }],
                    toApprove: [{ id: 'PC106', condition: 'Aprobada' }]
                }
            },
            {
                id: 'PC303', name: 'BASE DE DATOS', year: 3, period: '1er.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'PC203', condition: 'Regularizada' }, { id: 'PC207', condition: 'Regularizada' }],
                    toApprove: [{ id: 'PC203', condition: 'Aprobada' }, { id: 'PC207', condition: 'Aprobada' }]
                }
            },
            {
                id: 'PC304', name: 'PROGRAMACION ORIENTADA A OBJETOS I', year: 3, period: '1er.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'PC202', condition: 'Regularizada' }, { id: 'PC204', condition: 'Regularizada' }],
                    toApprove: [{ id: 'PC202', condition: 'Aprobada' }, { id: 'PC204', condition: 'Aprobada' }]
                }
            },
            {
                id: 'PC305', name: 'HISTORIA Y EPISTEMOLOGIA DE LAS CIENCIAS', year: 3, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'PC107', condition: 'Aprobada' }],
                    toApprove: [{ id: 'PC107', condition: 'Aprobada' }]
                }
            },
            {
                id: 'PC306', name: 'COMUNICACION Y REDES II', year: 3, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'PC302', condition: 'Regularizada' }],
                    toApprove: [{ id: 'PC302', condition: 'Aprobada' }]
                }
            },
            {
                id: 'PC307', name: 'ESTADISTICA I', year: 3, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'PC102', condition: 'Aprobada' }],
                    toApprove: [{ id: 'PC102', condition: 'Aprobada' }]
                }
            },
            {
                id: 'PC308', name: 'PRACTICA PROFESIONAL II', year: 3, period: '1er.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [
                        { id: 'PC200', condition: 'Regularizada' },
                        { id: 'PC208', condition: 'Regularizada' },
                        { id: 'PC100', condition: 'Aprobada' },
                        { id: 'PC106', condition: 'Aprobada' },
                        { id: 'PC103', condition: 'Aprobada' },
                        { id: 'PC207', condition: 'Regularizada' },
                        { id: 'PC107', condition: 'Aprobada' },
                        { id: 'PC203', condition: 'Regularizada' }
                    ],
                    toApprove: [
                        { id: 'PC200', condition: 'Aprobada' },
                        { id: 'PC208', condition: 'Aprobada' },
                        { id: 'PC100', condition: 'Aprobada' },
                        { id: 'PC106', condition: 'Aprobada' },
                        { id: 'PC103', condition: 'Aprobada' },
                        { id: 'PC207', condition: 'Aprobada' },
                        { id: 'PC107', condition: 'Aprobada' },
                        { id: 'PC203', condition: 'Aprobada' }
                    ]
                }
            },
            {
                id: 'PC400', name: 'PRACTICA PROFESIONAL III', year: 4, period: '1° anual', status: '', grade: null,
                correlatives: {
                    toCourse: [
                        { id: 'PC101', condition: 'Aprobada' },
                        { id: 'PC104', condition: 'Aprobada' },
                        { id: 'PC105', condition: 'Aprobada' },
                        { id: 'PC106', condition: 'Aprobada' },
                        { id: 'PC107', condition: 'Aprobada' },
                        { id: 'PC201', condition: 'Regularizada' },
                        { id: 'PC202', condition: 'Aprobada' },
                        { id: 'PC204', condition: 'Aprobada' },
                        { id: 'PC205', condition: 'Regularizada' },
                        { id: 'PC206', condition: 'Aprobada' },
                        { id: 'PC200', condition: 'Aprobada' },
                        { id: 'PC300', condition: 'Regularizada' },
                        { id: 'PC301', condition: 'Regularizada' },
                        { id: 'PC303', condition: 'Regularizada' },
                        { id: 'PC208', condition: 'Aprobada' },
                        { id: 'PC308', condition: 'Regularizada' }
                    ],
                    toApprove: [
                        { id: 'PC101', condition: 'Aprobada' },
                        { id: 'PC104', condition: 'Aprobada' },
                        { id: 'PC105', condition: 'Aprobada' },
                        { id: 'PC106', condition: 'Aprobada' },
                        { id: 'PC107', condition: 'Aprobada' },
                        { id: 'PC201', condition: 'Aprobada' },
                        { id: 'PC202', condition: 'Aprobada' },
                        { id: 'PC204', condition: 'Aprobada' },
                        { id: 'PC205', condition: 'Aprobada' },
                        { id: 'PC206', condition: 'Aprobada' },
                        { id: 'PC200', condition: 'Aprobada' },
                        { id: 'PC300', condition: 'Aprobada' },
                        { id: 'PC301', condition: 'Aprobada' },
                        { id: 'PC303', condition: 'Aprobada' },
                        { id: 'PC208', condition: 'Aprobada' },
                        { id: 'PC308', condition: 'Aprobada' }
                    ]
                }
            },
            {
                id: 'PC401', name: 'TECNOLOGIA EDUCATIVA', year: 4, period: '1er.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'PC103', condition: 'Regularizada' }, { id: 'PC300', condition: 'Regularizada' }, { id: 'PC301', condition: 'Regularizada' }],
                    toApprove: [{ id: 'PC103', condition: 'Aprobada' }, { id: 'PC300', condition: 'Aprobada' }, { id: 'PC301', condition: 'Aprobada' }]
                }
            },
            {
                id: 'PC402', name: 'TEORIA DE LA COMPUTACION', year: 4, period: '1er.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'PC202', condition: 'Aprobada' }, { id: 'PC204', condition: 'Aprobada' }],
                    toApprove: [{ id: 'PC202', condition: 'Aprobada' }, { id: 'PC204', condition: 'Aprobada' }]
                }
            },
            {
                id: 'PC403', name: 'ESTADISTICA II', year: 4, period: '1er.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'PC102', condition: 'Aprobada' }, { id: 'PC307', condition: 'Regularizada' }],
                    toApprove: [{ id: 'PC102', condition: 'Aprobada' }, { id: 'PC307', condition: 'Aprobada' }]
                }
            },
            {
                id: 'PC404', name: 'ENSEÑANZA Y APRENDIZAJE EN ESPACIOS VIRTUALES', year: 4, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [{ id: 'PC300', condition: 'Regularizada' }, { id: 'PC301', condition: 'Regularizada' }],
                    toApprove: [{ id: 'PC300', condition: 'Aprobada' }, { id: 'PC301', condition: 'Aprobada' }]
                }
            },
            {
                id: 'PC405', name: 'METODOLOGIA DE LA INVESTIGACION EDUCATIVA', year: 4, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [
                        { id: 'PC300', condition: 'Regularizada' },
                        { id: 'PC403', condition: 'Regularizada' },
                        { id: 'PC301', condition: 'Regularizada' },
                        { id: 'PC305', condition: 'Regularizada' }
                    ],
                    toApprove: [
                        { id: 'PC300', condition: 'Aprobada' },
                        { id: 'PC403', condition: 'Aprobada' },
                        { id: 'PC301', condition: 'Aprobada' },
                        { id: 'PC305', condition: 'Aprobada' }
                    ]
                }
            },
            {
                id: 'PC406', name: 'IDENTIDAD Y PROFESION DOCENTE', year: 4, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [
                        { id: 'PC107', condition: 'Aprobada' },
                        { id: 'PC200', condition: 'Aprobada' },
                        { id: 'PC300', condition: 'Regularizada' },
                        { id: 'PC301', condition: 'Regularizada' },
                        { id: 'PC208', condition: 'Aprobada' },
                        { id: 'PC308', condition: 'Regularizada' }
                    ],
                    toApprove: [
                        { id: 'PC107', condition: 'Aprobada' },
                        { id: 'PC200', condition: 'Aprobada' },
                        { id: 'PC300', condition: 'Aprobada' },
                        { id: 'PC301', condition: 'Aprobada' },
                        { id: 'PC208', condition: 'Aprobada' },
                        { id: 'PC308', condition: 'Aprobada' }
                    ]
                }
            },
            {
                id: 'PC407', name: 'TALLER: PRODUCCION DE MATERIAL EDUCATIVO HIPERMEDIA', year: 4, period: '2do.Cuatrimestre', status: '', grade: null,
                correlatives: {
                    toCourse: [
                        { id: 'PC206', condition: 'Aprobada' },
                        { id: 'PC300', condition: 'Regularizada' },
                        { id: 'PC301', condition: 'Regularizada' },
                        { id: 'PC401', condition: 'Regularizada' }
                    ],
                    toApprove: [
                        { id: 'PC206', condition: 'Aprobada' },
                        { id: 'PC300', condition: 'Aprobada' },
                        { id: 'PC301', condition: 'Aprobada' },
                        { id: 'PC401', condition: 'Aprobada' }
                    ]
                }
            }
        ]
    }
};
