import { startYear } from '@/constants';
import CustomOption from '@/UI/option';
import CustomSelect from '@/UI/select';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

interface I_FormProp {
    carsList: unknown[];
}

// interface I_Car {
//     [x: number]: string;
// }

const Form = ({ carsList }: I_FormProp) => {
    const router = useRouter();

    const createYearsRange = (startYear: number) => {
        const years = [];
        const currentYear = new Date().getFullYear();

        for (let i = startYear; i <= currentYear; i += 1) {
            years.push(startYear);
            startYear += 1;
        }

        return years;
    };

    const yearsList = useMemo(
        () => createYearsRange(startYear as number),
        [startYear, new Date().getFullYear()]
    );

    const handleFormSubmit = (data: FormData) => {
        const year = data.get('years');
        const model = data.get('model');
        router.push(`/result/${model}/${year}`);
    };
    return (
        <form
            action={handleFormSubmit}
            className="flex flex-col w-[400px] mx-auto"
        >
            <CustomSelect name="years">
                {yearsList.map((el: number) => (
                    <CustomOption key={el}>{el}</CustomOption>
                ))}
            </CustomSelect>

            <CustomSelect name="model">
                {carsList.map((el: unknown) => {
                    if (el && typeof el === 'object') {
                        const id = Object.keys(el);

                        return (
                            <CustomOption key={id[0]} value={id[0]}>
                                {el[id[0] as keyof unknown]}
                            </CustomOption>
                        );
                    }
                })}
            </CustomSelect>
            <button type="submit">Next</button>
        </form>
    );
};

export default Form;
