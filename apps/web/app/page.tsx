import Image, { type ImageProps } from 'next/image'

import { Button } from '@repo/ui/button'

import styles from './page.module.css'

type Props = Omit<ImageProps, 'src'> & {
  srcLight: string
  srcDark: string
}

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props

  return (
    <>
      <Image {...rest} className="imgLight" src={srcLight} />
      <Image {...rest} className="imgDark" src={srcDark} />
    </>
  )
}

export default function Home() {
  return (
    <div className={styles['page']}>
      <main className={styles['main']}>
        <ThemeImage
          className={styles['logo']}
          srcDark="turborepo-light.svg"
          srcLight="turborepo-dark.svg"
          height={38}
          width={180}
          alt="Turborepo logo"
          priority
        />
        <ol>
          <li>
            Get started by editing <code>apps/web/app/page.tsx</code>
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles['ctas']}>
          <a
            className={styles['primary']}
            href="https://vercel.com/new/clone?demo-description=Learn+to+implement+a+monorepo+with+a+two+Next.js+sites+that+has+installed+three+local+packages.&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F4K8ZISWAzJ8X1504ca0zmC%2F0b21a1c6246add355e55816278ef54bc%2FBasic.png&demo-title=Monorepo+with+Turborepo&demo-url=https%3A%2F%2Fexamples-basic-web.vercel.sh%2F&from=templates&project-name=Monorepo+with+Turborepo&repository-name=monorepo-turborepo&repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fturborepo%2Ftree%2Fmain%2Fexamples%2Fbasic&root-directory=apps%2Fdocs&skippable-integrations=1&teamSlug=vercel&utm_source=create-turbo"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              className={styles['logo']}
              src="/vercel.svg"
              height={20}
              width={20}
              alt="Vercel logomark"
            />
            Deploy now
          </a>
          <a
            className={styles['secondary']}
            href="https://turbo.build/repo/docs?utm_source"
            rel="noopener noreferrer"
            target="_blank"
          >
            Read our docs
          </a>
        </div>
        <Button className={styles['secondary']} appName="web">
          Open alert
        </Button>
      </main>
      <footer className={styles['footer']}>
        <a
          href="https://vercel.com/templates?search=turborepo&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src="/window.svg"
            height={16}
            width={16}
            alt="Window icon"
            aria-hidden
          />
          Examples
        </a>
        <a
          href="https://turbo.build?utm_source=create-turbo"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            src="/globe.svg"
            height={16}
            width={16}
            alt="Globe icon"
            aria-hidden
          />
          Go to turbo.build →
        </a>
      </footer>
    </div>
  )
}
