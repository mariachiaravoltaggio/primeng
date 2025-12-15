import { AppComponent } from '@/components/layout/app.component';
import { config } from '@/server/app.config.server';
import { bootstrapApplication } from '@angular/platform-browser';

const bootstrap = () => {
    return bootstrapApplication(AppComponent, config).catch((err) => {
        console.error('Bootstrap error:', err);
        throw err;
    });
};

export default bootstrap;
