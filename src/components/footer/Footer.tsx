import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-pink-600 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Blog Pessoal Generation 💛 Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse minhas redes sociais</p>
                    <div className='flex gap-2'>
                        <a href="https://www.linkedin.com/in/rebeka-lima" target="_blank">
                            <LinkedinLogo size={48} />
                        </a>
                        <a href="https://github.com/RebekaLima" target="_blank">
                            <GithubLogo size={48} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer