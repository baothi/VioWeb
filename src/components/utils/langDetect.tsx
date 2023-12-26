export const detectlanguage = (dataset_vn: any, dataset_en: any) => {
    const language = localStorage.getItem('language') ;
    if (language === 'vi' || !language) {
        return dataset_vn
    }
    else {
        return dataset_en
    }
}