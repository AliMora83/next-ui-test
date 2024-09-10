import React from 'react'
import { Divider } from "@nextui-org/divider";
import { Chip } from "@nextui-org/react";
import { CheckIcon } from "../../../public/checkIcon";

function Content() {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col p-10 gap-3 rounded-md">
        <div className="font-bold flex items-center justify-start gap-3">
          <Chip
            className="pl-2"
            startContent={<CheckIcon size={18} width={100} height={100} />}
            variant="shadow"
            color="primary"
          >
            <h3>Clicks</h3>
          </Chip>
        </div>
        <p className="text-small text-foreground">
          There are four characteristic clicks in the language, and they are
          represented by the letters: “│” “║” “!” “╪”.
        </p>

        <Divider className="my-4" />
        <h3 className="font-bold text-primary">1.1. The Dental click “│”</h3>
        <p className="text-small text-foreground">
          The “│” click sound is made by breaking a slight suction that is
          created by just placing the very tip of the tongue behind the upper
          front teeth; where they meet the gums; then (keeping both lips
          slightly apart) draw the tip of the tongue away from the teeth.
        </p>

        <Divider className="my-4" />
        <h3 className="font-bold text-primary">1.2. The Palatal click “!”</h3>
        <p className="text-small text-foreground">
          The “│” click sound is made by breaking a slight suction that is
          created by just placing the very tip of the tongue behind the upper
          front teeth; where they meet the gums; then (keeping both lips
          slightly apart) draw the tip of the tongue away from the teeth.
        </p>

        <Divider className="my-4" />
        <h3 className="font-bold text-primary">1.3. The Lateral click “║”</h3>
        <p className="text-small text-foreground">
          The “│” click sound is made by breaking a slight suction that is
          created by just placing the very tip of the tongue behind the upper
          front teeth; where they meet the gums; then (keeping both lips
          slightly apart) draw the tip of the tongue away from the teeth.
        </p>

        <Divider className="my-4" />
        <h3 className="font-bold text-primary">1.4. The Alveolar click “╪”</h3>
        <p className="text-small text-foreground">
          The “│” click sound is made by breaking a slight suction that is
          created by just placing the very tip of the tongue behind the upper
          front teeth; where they meet the gums; then (keeping both lips
          slightly apart) draw the tip of the tongue away from the teeth.
        </p>
      </div>
    </section>
  );
}

export default Content
