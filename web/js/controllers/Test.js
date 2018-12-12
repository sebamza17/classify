controllers.controller("TestCtrl", [
    '$scope',
    '$sce',
    function ($scope, $sce) {

        //Base controller data
        $scope.data = {
            correct: 0,
            incorrect: 0
        };

        //First test
        $scope.test1 = {
        };

        /**
         * Answers a question (user does from front-end)
         */
        $scope.answerQuestion = function (questionIndex, isCorrect) {

            console.log(questionIndex);

            console.log($scope.test1.questions);

            if (isCorrect) {
                $scope.test1.questions[questionIndex].status = 'correct';
                $scope.data.correct++;
            } else {
                $scope.test1.questions[questionIndex].status = 'incorrect';
                $scope.data.incorrect++;
            }
        };

        /**
         * Controller init         
         */
        function init() {

            //Set first test questions
            $scope.test1.questions = [
                {
                    question: '¿Cúal es la idea principal de Classify?',
                    status: 'not-answered',
                    options: [
                        {
                            isCorrect: false,
                            option: 'Drogas!'
                        },
                        {
                            isCorrect: false,
                            option: 'Ehhh, deben ser drogas no?'
                        },
                        {
                            isCorrect: false,
                            option: 'Hacer que todo sea mas bonito'
                        },
                        {
                            isCorrect: true,
                            option: 'Promover la reutilización de codigo, disminuir el impacto de los cambios'
                        }
                    ]
                },
                {
                    question: 'Si sabemos que el @padding-width: es 30px, y agregamos a una div la clase ".padding-double", ¿qué cantidad en pixeles tendrá esa div de padding?',
                    status: 'not-answered',
                    options: [
                        {
                            isCorrect: false,
                            option: '15px'
                        },
                        {
                            isCorrect: false,
                            option: '30px'
                        },
                        {
                            isCorrect: true,
                            option: '60px'
                        },
                        {
                            isCorrect: false,
                            option: 'No se aplica padding de manera global'
                        }
                    ]
                },
                {
                    question: 'Si tenemos una div.background-structure-cover.image-ratio.image-ratio-4-3 con imágen de fondo que ocupa el 100% de la pantalla, ¿Qué sucede con su alto al disminuir el tamaño de la pantalla?',
                    status: 'not-answered',
                    options: [
                        {
                            isCorrect: false,
                            option: 'Se mantiene constante'
                        },
                        {
                            isCorrect: false,
                            option: 'Disminuye en la misma proporción que el ancho'
                        },
                        {
                            isCorrect: false,
                            option: 'Aumenta el 75% de lo que disminuye el ancho'
                        },
                        {
                            isCorrect: true,
                            option: 'Disminuye el 75% de lo que disminuye el ancho'
                        }
                    ]
                },
                {
                    question: 'Si necesitamos alinear verticalmente una imágen con un texto, ¿dónde deberíamos aplicar la clase .valign-wrapper?',
                    status: 'not-answered',
                    options: [
                        {
                            isCorrect: true,
                            option: 'En el contenedor'
                        },
                        {
                            isCorrect: false,
                            option: 'En la imágen'
                        },
                        {
                            isCorrect: false,
                            option: 'En el texto'
                        },
                        {
                            isCorrect: false,
                            option: 'En ambos'
                        }
                    ]
                },
                {
                    question: '¿Qué clases de "valign" fueron aplicadas a la div gris para alinear el texto? (Tener en cuenta que el texto es un <span>, por lo que no se puede utilizar .text-right)',
                    status: 'not-answered',
                    options: [
                        {
                            isCorrect: false,
                            option: '.valign-right'
                        },
                        {
                            isCorrect: true,
                            option: '.valign-wrapper.valign-right'
                        },
                        {
                            isCorrect: false,
                            option: '.valign-wrapper.valign-space-between'
                        },
                        {
                            isCorrect: false,
                            option: '.valign-wrapper.valign-space-around'
                        }
                    ],
                    htmlExample: $sce.trustAsHtml('<div style="height: 100px;" class="bg-color-white-darken-2 valign-wrapper valign-right"><span>Este texto es un span, y está centrado vertical y hacia la derecha</span></div>')
                },
                {
                    question: '¿Qué clases deberíamos aplicar para dar margin (valor estandar) verticalmente a un elemento .display-block o .display-inline-block?',
                    status: 'not-answered',
                    options: [
                        {
                            isCorrect: false,
                            option: '.padding-vertical-full'
                        },
                        {
                            isCorrect: false,
                            option: '.margin-full'
                        },
                        {
                            isCorrect: true,
                            option: '.margin-top-full.margin-bottom-full'
                        },
                        {
                            isCorrect: true,
                            option: '.margin-vertical-full'
                        }
                    ],
                    htmlExample: $sce.trustAsHtml('')
                },
                {
                    question: '¿Qué clases deberíamos aplicar a un paragraph para sacarle todo los margenes?',
                    status: 'not-answered',
                    options: [
                        {
                            isCorrect: true,
                            option: '.margin-none'
                        },
                        {
                            isCorrect: false,
                            option: '.no-margin'
                        },
                        {
                            isCorrect: false,
                            option: '.remove-margin'
                        },
                        {
                            isCorrect: false,
                            option: 'Pff, no existen clases para eso'
                        }
                    ],
                    htmlExample: $sce.trustAsHtml('')
                },
                {
                    question: '¿Qué clases se le han aplicado a la siguiente div (contenedor negro al 80%)? Explicar como funciona cada una de ellas',
                    status: 'not-answered',
                    options: [
                        {
                            isCorrect: false,
                            option: '.text-center.padding-full.font-color-white.font-weight-bold'
                        },
                        {
                            isCorrect: true,
                            option: '.valign-wrapper.valign-center.bg-color-black-lighten-4.padding-full.font-color-white.font-weight-bold'
                        },
                        {
                            isCorrect: false,
                            option: '.valign-wrapper.bg-color-black.font-color-white-font-weight-bold'
                        },
                        {
                            isCorrect: false,
                            option: 'OMFG what is all this mayhem?'
                        }
                    ],
                    htmlExample: $sce.trustAsHtml('<div class="valign-wrapper valign-center bg-color-black-lighten-4 padding-full font-color-white font-weight-bold"><img style="width: 300px;" src="images/example_1.jpg" /> Ohh mayy gaaaauwd what a nice picture!</div>')
                },
                {
                    question: 'Supongamos que tenemos escala de colores de 20 niveles. Si aplicamos la clase .bg-color-white-darken-8, ¿qué % de blanco/negro estámos aplicando como color de fondo (saturación)?',
                    status: 'not-answered',
                    options: [
                        {
                            isCorrect: true,
                            option: 'Blanco oscurecido 40%'
                        },
                        {
                            isCorrect: false,
                            option: 'Blanco oscurecido al 80%'
                        },
                        {
                            isCorrect: false,
                            option: 'Blanco oscurecido 8%'
                        },
                        {
                            isCorrect: false,
                            option: 'Blanco 40% mas brillante'
                        }
                    ],
                    htmlExample: $sce.trustAsHtml('<div class="padding-double bg-color-white-darken-8"></div>')
                },
                {
                    question: 'Los botones de las respuestas de estas preguntas están dentro de un contenedor. ¿Qué clases de valign tiene aplicadas este contenedor?',
                    status: 'not-answered',
                    options: [
                        {
                            isCorrect: false,
                            option: 'No tiene ninguna clase de valign aplicada'
                        },
                        {
                            isCorrect: false,
                            option: '.valign-wrapper'
                        },
                        {
                            isCorrect: true,
                            option: '.valign-wrapper.valign-space-around'
                        },
                        {
                            isCorrect: false,
                            option: '.valign-wrapper.valign-space-between'
                        }
                    ]
                },
                {
                    question: 'Si tenemos un navbar fixed en top con un alto de 80px y unas tabs fixed en bottom con un alto de 60px, y necesitamos una div que ocupe el 100% del alto de la pantalla, ¿cómo deberíamos especificar el alto de esa div? Construir un ejemplo para contestar',
                    status: 'not-answered',
                    options: [
                        {
                            isCorrect: false,
                            option: 'Esh imposhible! Sebastián drogadicto de mierda'
                        },
                        {
                            isCorrect: true,
                            option: 'min-height: ~"calc(100vh - 80px)"; padding-bottom: 60px + @padding-width;'
                        },
                        {
                            isCorrect: false,
                            option: 'height: ~"calc(100vh - 80px)"; padding-bottom: 60px + @padding-width;'
                        },
                        {
                            isCorrect: false,
                            option: 'min-height: ~"calc(100vh - 80px)"; padding-bottom: 60px;'
                        }
                    ]
                }
            ];

        }

        //Begin initialization
        init();

    }]);