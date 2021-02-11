import React from 'react';
import {useTranslation} from 'react-i18next';
import {quizData} from '../questionsData';

function TranslationExamples() {
    const {t} = useTranslation('common');
    return (
        <div>
            <p>{t(`quiz.${quizData.Throne[0].question.key}`)}</p>
            <p>{quizData.Throne[0].question.en}</p>
        </div>
    );
}

export default TranslationExamples;