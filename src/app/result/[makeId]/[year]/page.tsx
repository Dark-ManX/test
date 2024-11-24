'use client';
import { getCurrentCarInfo } from '@/utils/getCurrentCarInfo';
import { useParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';

const ResultPage = () => {
    const [arr, setArr] = useState<unknown[]>([]);
    const { makeId, year } = useParams();

    const getInfoData = async ({
        model,
        year,
    }: {
        model: string;
        year: string;
    }) => {
        const result = await getCurrentCarInfo({ model, year });

        setArr(result);
    };

    useEffect(() => {
        getInfoData({ model: makeId as string, year: year as string });
    }, [makeId, year]);

    return (
        <div className="border-solid text-center">
            <Suspense fallback={<p>Loading...</p>}>
                <>
                    {arr.length ? (
                        <div className="mt-4 border-2 border-solid border-black p-5 w-[400px] mx-auto inline-block">
                            <h1 className="text-2xl font-bold">
                                {arr[0]['Make_Name'] as keyof unknown}
                            </h1>
                            <h3 className="text-xl font-bold">Models list</h3>
                            {arr.map((el) => {
                                if (
                                    el &&
                                    typeof el === 'object' &&
                                    'Model_ID' in el &&
                                    'Model_Name' in el
                                ) {
                                    return (
                                        <div key={el['Model_ID'] as number}>
                                            <p>{el['Model_Name'] as string}</p>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    ) : null}
                </>
            </Suspense>
        </div>
    );
};

export default ResultPage;
