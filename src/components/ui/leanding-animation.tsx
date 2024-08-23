"use client";
import { animate, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { GoCopilot } from "react-icons/go";

export function CardDemo() {
    return (
        <Card>
            <CardSkeletonContainer>
                <Skeleton />
            </CardSkeletonContainer>
        </Card>
    );
}

const Skeleton = () => {
    const scale = [1, 1.1, 1];
    const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
    const sequence = [
        [
            ".circle-1",
            {
                scale,
                transform,
            },
            { duration: 0.8 },
        ],
        [
            ".circle-2",
            {
                scale,
                transform,
            },
            { duration: 0.8 },
        ],
        [
            ".circle-3",
            {
                scale,
                transform,
            },
            { duration: 0.8 },
        ],
        [
            ".circle-4",
            {
                scale,
                transform,
            },
            { duration: 0.8 },
        ],
        [
            ".circle-5",
            {
                scale,
                transform,
            },
            { duration: 0.8 },
        ],
    ];

    useEffect(() => {
        // @ts-ignore
        animate(sequence, {
            repeat: Infinity,
            repeatDelay: 1,
        });
    }, []);
    return (
        <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
            <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
                <Container className="h-8 w-8 circle-1">
                    <ClaudeLogo className="h-4 w-4 " />
                </Container>
                <Container className="h-12 w-12 circle-2">
                    <GoCopilot className="h-6 w-6 dark:text-white" />
                </Container>
                <Container className="circle-3">
                    <OpenAILogo className="h-14 w-14 dark:text-white" />
                </Container>
                <Container className="h-12 w-12 circle-4">
                    <MetaIconOutline className="h-6 w-6 " />
                </Container>
                <Container className="h-8 w-8 circle-5">
                    <GeminiLogo className="h-4 w-4 " />
                </Container>
            </div>

            <div className="h-40 w-px absolute top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
                <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
                    <Sparkles />
                </div>
            </div>
        </div>
    );
};
const Sparkles = () => {
    const randomMove = () => Math.random() * 2 - 1;
    const randomOpacity = () => Math.random();
    const random = () => Math.random();
    return (
        <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
                <motion.span
                    key={`star-${i}`}
                    animate={{
                        top: `calc(${random() * 100}% + ${randomMove()}px)`,
                        left: `calc(${random() * 100}% + ${randomMove()}px)`,
                        opacity: randomOpacity(),
                        scale: [1, 1.2, 0],
                    }}
                    transition={{
                        duration: random() * 2 + 4,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        position: "absolute",
                        top: `${random() * 100}%`,
                        left: `${random() * 100}%`,
                        width: `2px`,
                        height: `2px`,
                        borderRadius: "50%",
                        zIndex: 1,
                    }}
                    className="inline-block bg-black dark:bg-white"
                ></motion.span>
            ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "max-w-sm w-[320px] mx-auto h-[5rem] rounded-xl border border-[rgba(255,255,255,0.10)] bg-transparent shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const CardTitle = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <h3
            className={cn(
                "text-lg font-semibold text-gray-800 dark:text-white py-2",
                className
            )}
        >
            {children}
        </h3>
    );
};

export const CardDescription = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <p
            className={cn(
                "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
                className
            )}
        >
            {children}
        </p>
    );
};

export const CardSkeletonContainer = ({
    className,
    children,
    showGradient = true,
}: {
    className?: string;
    children: React.ReactNode;
    showGradient?: boolean;
}) => {
    return (
        <div
            className={cn(
                "h-[5rem] md:h-[7rem] rounded-xl z-40",
                className,
                showGradient &&
                "bg-neutral-200 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(60%_50%_at_50%_50%,white_0%,transparent_100%)]"
            )}
        >
            {children}
        </div>
    );
};

const Container = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                `h-10 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
                className
            )}
        >
            {children}
        </div>
    );
};

export const ClaudeLogo = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            imageRendering="optimizeQuality"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 512 512"
            className={className}
        >
            <rect fill="#CC9B7A" width="512" height="512" rx="104.187" ry="105.042" />
            <path
                fill="#1F1F1E"
                fillRule="nonzero"
                d="M318.663 149.787h-43.368l78.952 212.423 43.368.004-78.952-212.427zm-125.326 0l-78.952 212.427h44.255l15.932-44.608 82.846-.004 16.107 44.612h44.255l-79.126-212.427h-45.317zm-4.251 128.341l26.91-74.701 27.083 74.701h-53.993z"
            />
        </svg>
    );
};

export const OpenAILogo = ({ className }: { className?: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            className={className}
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path d="M11.103,10.43793a1.78593,1.78593,0,1,0,2.43957.65362A1.786,1.786,0,0,0,11.103,10.43793Zm8.0047,1.93768q-.17587-.201-.37116-.40308.13641-.14337.264-.28649c1.60583-1.80427,2.28357-3.61371,1.65558-4.70154-.60217-1.043-2.39343-1.35382-4.63593-.91779q-.33132.06482-.659.14624-.06272-.21624-.13343-.43C14.467,3.49042,13.2381,1.99921,11.98206,2,10.77765,2.00055,9.61359,3.39709,8.871,5.5575q-.10959.31969-.20276.64471-.21908-.05375-.44-.0993c-2.366-.48578-4.27167-.16584-4.89844.9226-.601,1.04376.02753,2.74982,1.52851,4.47211q.22329.25562.45922.49976c-.18542.191-.361.38189-.52465.57171-1.4646,1.698-2.05719,3.37616-1.45716,4.41541.61969,1.07348,2.49854,1.42437,4.7854.97436q.278-.05511.55292-.124.10071.35156.22095.697c.73932,2.11706,1.89685,3.46863,3.097,3.4682,1.23944-.00073,2.48194-1.45288,3.23474-3.65875.05945-.17432.11573-.35535.16907-.54175q.35514.08835.71485.1568c2.20336.41687,3.95251.089,4.55145-.951C21.28058,15.93109,20.64288,14.12933,19.10767,12.37561ZM4.07019,7.45184c.38586-.67,1.94324-.93139,3.98608-.512q.19584.04027.39838.09a20.464,20.464,0,0,0-.42126,2.67767,20.88659,20.88659,0,0,0-2.10389,1.6936q-.21945-.22695-.42718-.4649l.00006.00006C4.21631,9.46057,3.708,8.08081,4.07019,7.45184Zm3.88666,5.72809c-.51056-.3866-.98505-.78265-1.41571-1.181.43036-.39587.90515-.79059,1.41467-1.17615q-.02746.58915-.02722,1.1792Q7.929,12.59117,7.95685,13.17993Zm-.00061,3.94061a7.23675,7.23675,0,0,1-2.63971.09314,1.766,1.766,0,0,1-1.241-.65631c-.36407-.63067.11176-1.978,1.36432-3.43023q.23621-.273.48791-.53174a20.49026,20.49026,0,0,0,2.10712,1.70007,20.80226,20.80226,0,0,0,.42621,2.712Q8.21011,17.07023,7.95624,17.12054Zm7.10113-8.03936q-.50309-.317-1.01861-.61365-.5073-.292-1.0268-.56207c.593-.24933,1.17591-.46228,1.73865-.63581A18.21775,18.21775,0,0,1,15.05737,9.08118ZM9.679,5.83521c.63623-1.85114,1.57763-2.98053,2.30352-2.98084.77308-.00037,1.77753,1.21826,2.43433,3.19763q.064.19355.121.38928a20.478,20.478,0,0,0-2.52716.9712,20.06145,20.06145,0,0,0-2.519-.98194Q9.578,6.13062,9.679,5.83521ZM9.27863,7.259a18.30717,18.30717,0,0,1,1.72967.642Q9.95746,8.4433,8.96094,9.0824C9.0412,8.4444,9.148,7.83313,9.27863,7.259ZM8.9624,14.91968q.49695.31813,1.00843.61273.52174.30039,1.05737.57556a18.19577,18.19577,0,0,1-1.74445.66492C9.15161,16.1908,9.04364,15.56879,8.9624,14.91968Zm5.45569,3.14551A7.23556,7.23556,0,0,1,13.18,20.39844l-.00006.00006a1.76585,1.76585,0,0,1-1.18841.747c-.72821.00042-1.65766-1.085-2.28992-2.89545q-.11169-.32108-.20551-.648a20.10863,20.10863,0,0,0,2.52918-1.0097,20.79976,20.79976,0,0,0,2.54736.97851Q14.50141,17.81983,14.41809,18.06519Zm.36224-1.32422c-.56921-.176-1.16058-.39252-1.76214-.64551q.50867-.2677,1.02472-.56543.52955-.30579,1.0321-.62689A18.1524,18.1524,0,0,1,14.78033,16.741Zm.44629-4.74268q.00111.91095-.05688,1.82044c-.49268.33343-1.01282.659-1.554.97143-.53894.31116-1.07293.59711-1.59674.8559q-.82682-.39624-1.62176-.854-.79047-.455-1.54468-.969-.06894-.90921-.06946-1.82172l.00012.00019q-.00063-.91187.06794-1.82184c.49255-.33637,1.00891-.66168,1.54278-.96991.53632-.30969,1.077-.59442,1.61469-.85248q.81664.39688,1.60382.85065.78992.454,1.549.95868.06519.91443.06524,1.83166Zm.95673-5.09283c1.92133-.37372,3.37-.12232,3.73291.50622.3866.66962-.16748,2.1485-1.55383,3.70636l-.00006.00006q-.1149.12891-.23841.25891A20.06118,20.06118,0,0,0,15.98,9.68915a20.04054,20.04054,0,0,0-.40546-2.64893Q15.88486,6.96387,16.18335,6.90546Zm-.12988,3.8847A18.16447,18.16447,0,0,1,17.51483,11.978a18.11912,18.11912,0,0,1-1.45672,1.20831q.02325-.59391.02288-1.18842Q16.08072,11.39389,16.05347,10.79016Zm3.8681,5.78876c-.36346.63116-1.76788.89435-3.65222.53784q-.32391-.06115-.66474-.14557a20.069,20.069,0,0,0,.38746-2.68176,19.93914,19.93914,0,0,0,2.13708-1.71588q.17643.18329.33563.36487v-.00007a7.23437,7.23437,0,0,1,1.40308,2.23792A1.76563,1.76563,0,0,1,19.92157,16.57892Z" fill="#6563ff" />
        </svg>


    );
};
export const GeminiLogo = ({ className }: { className?: string }) => {
    return (
        <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            className={className}
        >
            <path
                d="M16 8.016A8.522 8.522 0 008.016 16h-.032A8.521 8.521 0 000 8.016v-.032A8.521 8.521 0 007.984 0h.032A8.522 8.522 0 0016 7.984v.032z"
                fill="url(#prefix__paint0_radial_980_20147)"
            />
            <defs>
                <radialGradient
                    id="prefix__paint0_radial_980_20147"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(16.1326 5.4553 -43.70045 129.2322 1.588 6.503)"
                >
                    <stop offset=".067" stop-color="#9168C0" />
                    <stop offset=".343" stop-color="#5684D1" />
                    <stop offset=".672" stop-color="#1BA1E3" />
                </radialGradient>
            </defs>
        </svg>
    );
};

export const MetaIconOutline = ({ className }: { className?: string }) => {
    return (
        <svg
           id="Layer_1"
           data-name="Layer 1"
            version="1.1"
            viewBox="0 0 512 512"
            className={className}
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g id="_x32_33-node-js">
                <g>
                    <path d="M255.908,485.999c-6.116,0-12.323-1.642-17.708-4.746l-56.319-33.316c-8.397-4.747-4.29-6.389-1.551-7.303c11.226-3.925,13.508-4.745,25.465-11.592c1.279-0.729,2.922-0.457,4.199,0.366l43.266,25.648c1.552,0.912,3.741,0.912,5.202,0l168.592-97.304c1.553-0.913,2.555-2.738,2.555-4.563V158.583c0-1.917-1.002-3.651-2.645-4.654L258.463,56.716c-1.551-0.913-3.65-0.913-5.202,0L84.852,154.019c-1.644,0.913-2.647,2.738-2.647,4.655v194.515c0,1.825,1.003,3.65,2.647,4.473l46.188,26.653c25.102,12.504,40.436-2.191,40.436-17.068V175.195c0-2.738,2.19-4.837,4.93-4.837h21.359c2.647,0,4.928,2.099,4.928,4.837v192.143c0,33.407-18.256,52.576-49.928,52.576c-9.768,0-17.435,0-38.794-10.588l-44.179-25.467c-10.954-6.299-17.708-18.074-17.708-30.76V158.583c0-12.596,6.754-24.462,17.708-30.76L238.2,30.519c10.679-6.024,24.828-6.024,35.416,0l168.594,97.394c10.953,6.298,17.707,18.073,17.707,30.761v194.515c0,12.596-6.754,24.371-17.707,30.761l-168.594,97.303C268.23,484.357,262.113,485.999,255.908,485.999z M392.006,294.224c0-36.421-24.646-46.096-76.4-52.941c-52.396-6.938-57.689-10.498-57.689-22.729c0-10.131,4.473-23.641,43.266-23.641c34.596,0,47.375,7.485,52.668,30.853c0.457,2.19,2.467,3.833,4.746,3.833h21.91c1.367,0,2.645-0.547,3.559-1.552c0.914-1.003,1.369-2.373,1.275-3.743c-3.375-40.252-30.121-58.965-84.158-58.965c-48.103,0-76.764,20.264-76.764,54.311c0,36.876,28.569,47.101,74.664,51.662c55.225,5.387,59.514,13.511,59.514,24.373c0,18.805-15.15,26.835-50.658,26.835c-44.635,0-54.403-11.227-57.689-33.406c-0.365-2.373-2.374-4.107-4.837-4.107h-21.817c-2.738,0-4.836,2.191-4.836,4.836c0,28.39,15.426,62.254,89.271,62.254C361.336,352.005,392.006,330.916,392.006,294.224L392.006,294.224z" style={{ fill: '#539E43' }} />
                </g>
            </g>
        </svg>

    );
};
