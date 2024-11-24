'use client';
import Form from '@/features/mainPage/Form';
import { getModels } from '@/utils/getModels';
import { proceedData } from '@/utils/proceedData';
import { Suspense, useEffect, useState } from 'react';

interface I_Car {
    [x: number]: string;
}

export default function Home() {
    const [carsList, setCarsList] = useState<I_Car[]>([]);

    const fetchedModels = async () => {
        const res = await getModels();
        const result = await proceedData(res as ReadableStream, 'getModels');

        setCarsList(result);
    };

    useEffect(() => {
        fetchedModels();
    }, []);

    return (
        <>
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start mx-auto">
                <Suspense fallback={<p>Loading...</p>}>
                    <Form carsList={carsList} />
                </Suspense>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
        </>
    );
}
