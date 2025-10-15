import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import '@mx/ui/styles.css';
import '../src/index.css';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [
    (Story) => (
      <Theme appearance="light" accentColor="indigo" grayColor="sand">
        <div className="min-h-screen bg-surface text-foreground/90 p-6">
          <Story />
        </div>
      </Theme>
    )
  ]
};

export default preview;
