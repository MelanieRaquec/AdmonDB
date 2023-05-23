import {MultiFactorResolver} from "@firebase/auth";
import {Code} from "@/components/Code";
import {verifyUserEnrolled} from "@/firebase/authentication";
import {useRouter} from "next/router";
import {notify} from "@/utils/notify";

type Props = {
    verificationId: string,
    resolver: MultiFactorResolver
}
export function CodeSignIn({verificationId, resolver}: Props) {
    const router = useRouter();

    async function getCode(code: string) {
        const response = await verifyUserEnrolled(
            {
                verificationId,
                resolver
            },
            code
        );

        if (response) {
            await router.push('/selectdatabase');
        }else {
            notify('ALgo salió mal.');
        }
    }
    return (
        <Code
            getCode={getCode}
        />
    )
}