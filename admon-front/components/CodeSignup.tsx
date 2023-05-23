import {Code} from "@/components/Code";
import {User} from "@firebase/auth";
import {enrollUser} from "@/firebase/authentication";
import {useRouter} from "next/router";
import {notify} from "@/utils/notify";

type Props = {
    currentUser: User,
    verificationCodeId: string
}

export function CodeSignup({currentUser, verificationCodeId}: Props) {
    const router = useRouter();

    async function getCode(code: string) {
        const response = await enrollUser(
            currentUser,
            verificationCodeId,
            code
        );

        if (response) {
            await router.push('/selectdatabase');
        }else {
            notify('Algo salió mal.');
        }
    }

    return <Code getCode={getCode} />
}