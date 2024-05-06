import React, { Component } from "react";
class Hallucination extends Component {
  render() {
    return (
      <section className="col-7 nested">
        <h2 className="large-spacer-top col-5">Introduction</h2>
        <br></br>
        <br></br>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom small-spacer-top">
            Significant advancements in large language models (LLMs) have
            unfolded over the past few years, showcasing exponential growth in
            their capabilities (Naveed et. al., 2024). The swift pace of
            innovation may have changed the way humans interact with computers,
            but with rapid progress come inevitable challenges that must be
            addressed. In this case study, LLMs are extensively explored,
            emphasising their operational mechanisms and unintended
            consequences. The study is focused on text-generation LLMs,
            particularly ChatGPT. The primary aim is to investigate a notable
            socio-technical ethical challenge termed 'AI hallucination,' which
            involves AI generating highly realistic but superficial outputs
            lacking genuine comprehension. The case study assesses the potential
            ramifications of AI hallucinations within socio-technical contexts,
            addressing ethical dilemmas. Additionally, the study discusses
            strategies for mitigating the risks associated with AI
            hallucinations in such systems.
          </p>
        </div>
        <h2 className="large-spacer-top col-5">Overview of LLMs</h2>
        <br></br>
        <br></br>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom small-spacer-top">
            Large Language Models (LLMs) are artificial intelligence (AI)
            systems designed to process and generate human-like text (Brodnik
            et. al., 2023). These models, like GPT (Generative Pre- trained
            Transformer), are built on word embedding technology with
            transformer architecture and are capable of reading and writing
            language at a human level (Radford et. al., 2018). LLMs are
            pretrained on large datasets and then fine-tuned for specific tasks
            and applications like language translation, summarization, language
            translation, sentiment analysis, content generation, or dialogue
            generation (Liu et. al., 2024).
            <br></br>
            <br></br>
            However, LLMs also raise concerns about biases in the data they
            learn from, as well as the ethical implications of their use in
            generating highly convincing but potentially misleading content
            (Ray, 2023). Despite these challenges, LLMs represent a significant
            leap in AI language capabilities, with ongoing research focused on
            improving their accuracy, efficiency (Xu et. al., 2023), and ethical
            use (Ji et. al., 2024).
          </p>
        </div>
        <h2 className="large-spacer-top col-5">How LLMs work</h2>
        <br></br>
        <br></br>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom small-spacer-top">
            LLMs, particularly ChatGPT, start by training on vast datasets
            without explicit labels using self- supervised learning, enabling
            them to uncover patterns independently (Radford et. al., 2018). In
            self-supervised learning models, the data is not labelled, and the
            model determines patterns found in the data before labelling the
            data itself (Raina et. al., 2007). After certain patterns in the
            data have been constructed, the model is then fine-tuned so that the
            patterns are aligned with human preferences and expectations.
            Fine-tuning may also be done for specific tasks, like dialogue
            generation, to optimise performance. LLMs leverage natural language
            processing (NLP) to interpret textual data. NLP is a branch of AI
            focused on enabling computers to process, generate, and manipulate
            human language (Geetha et. al., 2023). To represent text in the form
            of data that can be processed by machine learning (ML) algorithms,
            words are converted into numeric vectors, a process known as word
            embedding. Words with similar meanings have vectors that are closer
            together in space. ML algorithms leverage these vector
            representations to measure word similarity, enabling algorithms to
            understand relationships between words (Mikolov et. al., 2013).
            <br></br>
            <br></br>
            Word embeddings play a crucial role in NLP tasks such as next-word
            prediction, used by ChatGPT (Ray et. al., 2023), and masked word
            prediction, used by BERT (Devlin et. al., 2019). Using next-word
            prediction, ChatGPT can predict the word that most likely follows a
            string of words. Since LLMs have a huge corpus of textual data to
            generate patterns from, they can predict the next word by checking
            word similarity based on the patterns discovered during pre-
            training and fine-tuning. The transformer architecture, as
            introduced by Vaswani et al. in 2017, revolutionised language
            modelling (Chernyavskiy, Ilvovsky, & Nakov, 2021). Unlike
            traditional sequential models, transformers process input data using
            attention mechanisms, allowing for parallel processing of word
            vectors. This parallelization significantly enhances efficiency and
            scalability, enabling large language models (LLMs) like ChatGPT to
            predict words more accurately and handle massive datasets
            effectively. Consequently, LLMs can be trained faster and can handle
            increasingly large amounts of training data.
          </p>
        </div>
        <h2 className="large-spacer-top col-5">Problems with the Data</h2>
        <br></br>
        <br></br>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom small-spacer-top">
            LLMs have rapidly scaled in size, from training on millions of
            parameters to trillions (Patil & Gudivada, 2024). However, the
            training data used for LLMs, typically scraped from the internet, is
            not a balanced representation of global perspectives. The data
            suggests that the internet's demographic skew towards wealthy, young
            males from developed countries introduces biases into LLMs (OpenAI,
            2020).
            <br></br>
            <br></br>
            One critical challenge with LLMs is the static nature of their
            training data. Once trained and deployed, these models do not
            dynamically update with changing information or societal views. This
            static nature means that LLMs can lose context over time,
            potentially generating outdated or biased outputs. (Zhang et. al.,
            2023)
            <br></br>
            <br></br>
            Despite efforts to implement filtering algorithms to mitigate biases
            in training data, LLMs still exhibit biases in their generated
            content (Spillner, 2024). Automated bias removal systems may not
            effectively filter out all relevant biases, highlighting ongoing
            challenges in addressing dataset biases for LLMs.
          </p>
        </div>
        <h2 className="large-spacer-top col-5">AI Hallucination</h2>
        <br></br>
        <br></br>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom small-spacer-top">
            In contrast with the sensory perception of the human brain, LLMs
            exist entirely in the world of data. When an LLM is trained with a
            huge set of data points to identify patterns, it may involuntarily
            create “fabrications found in an alternate frame of reference”
            (Chatfield, 2023). This phenomenon has been termed ‘AI
            hallucination’. AI hallucinations occur when AI generates a response
            that deviates from facts but that it believes is factual (Rawte et.
            al., 2023). With the mass use of LLMs and generative AIs, there have
            been several cases of AI hallucinations in the past couple of years
            (Bordoloi, 2022; Pearl, 2023; Diamond, 2023). AI hallucination has
            become such a prevalent phenomenon that the word ‘hallucinate’ was
            chosen as Cambridge’s Word of the Year for 2023 (Cambridge
            Dictionary, 2023).
          </p>
        </div>
        <h2 className="large-spacer-top col-5">Why hallucinations may occur</h2>
        <br></br>
        <br></br>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom small-spacer-top">
            Due to the aforementioned problems with data and the black-box
            nature of AI (Hassija et. al., 2024), arbitrary patterns emerge.
            Through word embeddings, LLMs use word similarity from their
            training data to predict the next word in a sequence. However, this
            approach can falter when encountering ambiguous or diverse contexts
            where similar words might not be appropriate. This is because LLMs
            lack true understanding of context beyond the words immediately
            preceding a prediction point. Natural language processing does not
            translate to natural language understanding (Bender et. al., 2021).
            Furthermore, if the data used to train an LLM is of poor quality or
            not representative of diverse language use, the model's performance
            can suffer, leading to less accurate predictions. In addition to
            low-quality training datasets, LLMs trained on biased data can
            perpetuate and amplify those biases in their predictions,
            potentially generating problematic or unfair results in various
            applications.
          </p>
        </div>
        <h2 className="large-spacer-top col-5">
          Consequences of AI hallucinations
        </h2>
        <br></br>
        <br></br>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom small-spacer-top">
            AI hallucinations can negatively impact decision-making, propagate
            misinformation (Bender et. al., 2021), raise ethical and legal
            issues (Li, 2023), and undermine the credibility of scientific
            literature (Athaluri et. al., 2023). The dangers of misinformation
            especially lie in marginalising already marginalised communities by
            reinforcing stereotypes through hallucinations (Bender et. al.,
            2021). The risks associated with AI hallucinations are exacerbated
            by the scale of datasets and the increasing reliance on AI-generated
            data. The larger the scale of datasets, the larger the problems are.
            With the number of users and textual data growing exponentially,
            there are more chances for bias and misinformation.
            <br></br>
            <br></br>
            One must also consider that the sheer use of LLMs has poisoned the
            well (Rao, 2023). With a substantial amount of online content being
            AI-generated, there's a risk of feeding LLMs with misleading or
            falsified data. AI-generated content, especially fabricated content,
            can compromise data quality, posing challenges for accurate and
            reliable AI model training and inference, as well as the need for
            increased efforts in data verification.
          </p>
        </div>
        <h2 className="large-spacer-top col-5">Mitigation</h2>
        <br></br>
        <br></br>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom col-5">
            OpenAI's approach to mitigating hallucinations involved refining
            their model by implementing mechanisms to flag and verify factual
            content, along with enhancing GPT's ability to self- correct
            hallucinatory outputs. These efforts significantly improved
            accuracy. However, by their own admission, hallucinations can become
            more dangerous when models are perceived as trustworthy by their
            users (OpenAI, 2023).
            <br></br>
            <br></br>
            In a comprehensive overview of mitigation techniques by S M Towhidul
            Islam Tonmoy et. al. (2024), the authors identified two general
            strategies to mitigate hallucinations in LLMs - prompt engineering
            (White et. al., 2023) and the development of new models (Shi et.
            al., 2023; Razumovskaia et. al., 2024; Qiu et. al., 2024). A notable
            method in prompt engineering is retrieval augmentation generation
            (RAG), which enhances LLM responses by accessing external databases
            rather than only relying on the model’s outdated training data
            (Lewis et. al., 2021).
            <br></br>
            <br></br>
            More general approaches include the ongoing research into
            explainable AI, which could explain the black-box nature of AI,
            making it easy to detect and correct hallucinations in LLMs (Wu et.
            al., 2024). There also exists research that centres on the people
            who stand to be adversely affected by bias in datasets, such as
            value-sensitive design (Friedman, & Hendry, 2019).
          </p>
          <p className="reflections col-2">
            Although, hallucinations are not always bad or unwanted. Depending
            on the domain, tasks may require LLMs to hallucinate. Writing a poem
            is different than writing a research paper.
            <br></br>
            <br></br>
            Temperature is a parameter that influences the randomness and
            creativity of the generated text, giving users control over the
            diversity of the output.
            <br></br>
            <br></br>
            Temperature choice varies by application and desired output. Lower
            temperatures suit precise tasks like question-answering, while
            higher temperatures benefit creative tasks like storytelling.
            Balancing temperature is crucial for LLM output, letting users
            control coherence versus randomness. Adjusting temperature helps
            LLMs adapt, enhancing usefulness across applications.
          </p>
        </div>
        <h2 className="large-spacer-top col-5">Conclusion</h2>
        <br></br>
        <br></br>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom small-spacer-top">
            While LLMs represent a significant breakthrough in AI and NLP, they
            encounter the critical issue of generating erroneous content or
            hallucinations due to their inherent functioning. In this case
            study, LLMs have been introduced, and their mechanisms have been
            explained to shed light on why AI hallucinations could potentially
            occur. Furthermore, the paper discussed the consequences of AI
            hallucinations along with proposing general mitigation strategies.
            In conclusion, as LLMs get bigger and are adopted by more users, the
            occurrence of AI hallucinations increases as well, which poses a
            significant problem due to the potential for widespread
            misinformation.
          </p>
        </div>
        <h2 className="large-spacer-top col-5">References</h2>
        <br></br>
        <br></br>
        <div className="text-group">
          <p className="large-paragraph medium-spacer-bottom small-spacer-top">
            Athaluri, S., Manthena, S., Kesapragada, V., Yarlagadda, V., Dave,
            T., & Duddumpudi, R. (2023). Exploring the Boundaries of Reality:
            Investigating the Phenomenon of Artificial Intelligence
            Hallucination in Scientific Writing Through ChatGPT References.
            Cureus, 15. https://doi.org/10.7759/cureus.37432.
            <br></br>
            <br></br>
            Bender, E. M., Gebru, T., McMillan-Major, A., & Shmitchell, S.
            (2021). On the dangers of stochastic parrots: Can language models be
            too big? In Proceedings of the 2021 ACM conference on fairness,
            accountability, and transparency. (pp. 610-623).
            https://doi.org/10.1145/3442188.3445922
            <br></br>
            <br></br>
            Bordoloi, P. (2022, November 20). Why Meta Took Down its
            “Hallucinating” AI Model Galactica? Analytics India Magazine.
            https://analyticsindiamag.com/why-meta-took-
            down-its-hallucinating-ai-model-galactica/
            <br></br>
            <br></br>
            Brodnik, N., Carton, S., Muir, C., Ghosh, S., Downey, D., Echlin,
            M., Pollock, T., & Daly, S. (2023). Perspective: Large Language
            Models in Applied Mechanics. Journal of Applied Mechanics.
            https://doi.org/10.1115/1.4062773.
            <br></br>
            <br></br>
            Cambridge Dictionary. (2023). Word of the Year 2023. Cambridge
            Dictionary. https://dictionary.cambridge.org/editorial/woty
            <br></br>
            <br></br>
            Chatfield, T. (2023). AI hallucination. New Philosopher, 76.
            https://link-gale-
            com.ucd.idm.oclc.org/apps/doc/A754322462/AONE?u=dublin&sid=summon&xid=02f
            84acd
            <br></br>
            <br></br>
            Chernyavskiy, A., Ilvovsky, D., & Nakov, P. (2021). Transformers:
            "the end of history" for NLP?. Ithaca: Cornell University Library,
            arXiv.org. https://doi.org/10.48550/arxiv.2105.00813
            <br></br>
            <br></br>
            Devlin, J., Ming-Wei, C., Lee, K., & Toutanova, K. (2019). BERT:
            Pre-training of deep bidirectional transformers for language
            understanding. (). Ithaca: Cornell University Library, arXiv.org.
            https://doi.org/10.48550/arxiv.1810.04805
            <br></br>
            <br></br>
            Diamond, S. (2023, December 17). A.I. Chatbots, Hens and Humans Can
            All “Hallucinate.” The New York Times.
            https://www.nytimes.com/2023/12/17/insider/ai-chatbots-
            humans-hallucinate.html
            <br></br>
            <br></br>
            Friedman, B., & Hendry, D. G. (2019). Value sensitive design:
            Shaping technology with moral imagination. Mit Press.
            <br></br>
            <br></br>
            Geetha, D., Gomathy, D., Yagn, M., & Praneesh, S. (2023). The Role
            Of Natural Language Processing. International Journal Of Scientific
            Research In Engineering And Management.
            https://doi.org/10.55041/ijsrem27094.
            <br></br>
            <br></br>
            Hassija, V., Chamola, V., Mahapatra, A., Singal, A., Goel, D.,
            Huang, K., Scardapane, S., Spinelli, I., Mahmud, M., & Hussain, A.
            (2024). Interpreting black-box models: A review on explainable
            artificial intelligence. Cognitive Computation, 16(1), 45-74.
            https://doi.org/10.1007/s12559-023-10179-8
            <br></br>
            <br></br>
            Ji, J., Liu, M., Dai, J., Pan, X., Zhang, C., Bian, C., ... & Yang,
            Y. (2024). Beavertails: Towards improved safety alignment of llm via
            a human-preference dataset. Advances in Neural Information
            Processing Systems, 36.
            <br></br>
            <br></br>
            Li, Z. (2023). The dark side of ChatGPT: legal and ethical
            challenges from stochastic parrots and hallucination. arXiv preprint
            arXiv:2304.14347.
            <br></br>
            <br></br>
            Liu, Y., He, H., Han, T., Zhang, X., Liu, M., Tian, J., Zhang, Y.,
            Wang, J., Gao, X., Zhong, T., Pan, Y., Xu, S., Wu, Z., Liu, Z.,
            Zhang, X., Zhang, S., Hu, X., Zhang, T., Qiang, N., . . . Ge, B.
            (2024). Understanding LLMs: A comprehensive overview from training
            to inference. Ithaca: Cornell University Library, arXiv.org.
            https://doi.org/10.48550/arxiv.2401.02038
            <br></br>
            <br></br>
            Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Goyal,
            N., Küttler, H., Lewis, M., Yih, W., Rocktäschel, T., Riedel, S., &
            Kiela, D. (2021). Retrieval-augmented generation for
            knowledge-intensive NLP tasks. Ithaca: Cornell University Library,
            arXiv.org. https://doi.org/10.48550/arxiv.2005.11401
            <br></br>
            <br></br>
            Mikolov, T., Chen, K., Corrado, G., & Dean, J. (2013). Efficient
            estimation of word representations in vector space. Ithaca: Cornell
            University Library, arXiv.org.
            https://doi.org/10.48550/arxiv.1301.3781
            <br></br>
            <br></br>
            Naveed, H., Khan, A. U., Qiu, S., Saqib, M., Anwar, S., Usman, M.,
            Akhtar, N., Barnes, N., & Mian, A. (2024). A comprehensive overview
            of large language models. Ithaca: Cornell University Library,
            arXiv.org. https://doi.org/10.48550/arxiv.2307.06435
            <br></br>
            <br></br>
            OpenAI (2020). GPT-3 Model Card. GitHub. Retrieved May 1, 2024, from
            https://github.com/openai/gpt-3/blob/master/model-card.md
            <br></br>
            <br></br>
            OpenAI (2023). Gpt-4 technical report. arXiv preprint
            arXiv:2303.08774.
            <br></br>
            <br></br>
            Patil, R., & Gudivada, V. (2024). A review of current trends,
            techniques, and challenges in large language models. Applied
            Sciences, 14(5), 2074. https://doi.org/10.3390/app14052074
            <br></br>
            <br></br>
            Pearl, M. (2023, February 8). Bard shared false information in
            Google’s announcement. Mashable.
            https://mashable.com/article/google-bard-james-webb-telescope-false-fact
            <br></br>
            <br></br>
            Qiu, Y., Embar, V., Cohen, S. B., & Han, B. (2024). Think while you
            write: Hypothesis verification promotes faithful knowledge-to-text
            generation. (). Ithaca: Cornell University Library, arXiv.org.
            https://doi.org/10.48550/arxiv.2311.09467
            <br></br>
            <br></br>
            Radford, A., Narasimhan, K., Salimans, T., & Sutskever, I. (2018).
            Improving language understanding by generative pre-training.
            <br></br>
            <br></br>
            Raina, R., Battle, A., Lee, H., Packer, B., & Ng, A. (2007).
            Self-taught learning: Transfer learning from unlabeled data.In
            Proceedings of the 24th international conference on Machine learning
            (ICML '07). Association for Computing Machinery. 759-766.
            https://doi.org/10.1145/1273496.1273592
            <br></br>
            <br></br>
            Razumovskaia, E., Vulić, I., Marković, P., Cichy, T., Zheng, Q.,
            Wen, T., & Budzianowski, P. (2024). Dial BeInfo for faithfulness:
            Improving factuality of information-seeking dialogue via behavioural
            fine-tuning. Ithaca: Cornell University Library, arXiv.org.
            https://doi.org/10.48550/arxiv.2311.09800
            <br></br>
            <br></br>
            Rao, R. (2023, July 28). AI-Generated Data Can Poison Future AI
            Models. Scientific American.
            https://www.scientificamerican.com/article/ai-generated-data-can-poison-
            future-ai-models/
            <br></br>
            <br></br>
            Rawte, V., Chakraborty, S., Pathak, A., Sarkar, A., S M Towhidul
            Islam Tonmoy, Chadha, A., Sheth, A. P., & Das, A. (2023). The
            troubling emergence of hallucination in large language models -- an
            extensive definition, quantification, and prescriptive remediations.
            (). Ithaca: Cornell University Library, arXiv.org.
            https://doi.org/10.48550/arxiv.2310.04988
            <br></br>
            <br></br>
            Ray, P. P. (2023). ChatGPT: A comprehensive review on background,
            applications, key challenges, bias, ethics, limitations and future
            scope. Internet of Things and Cyber- Physical Systems.
            <br></br>
            <br></br>S M Towhidul Islam Tonmoy, Zaman, S. M. M., Jain, V., Rani,
            A., Rawte, V., Chadha, A., & Das, A. (2024). A comprehensive survey
            of hallucination mitigation techniques in large language models. ().
            Ithaca: Cornell University Library, arXiv.org.
            https://doi.org/10.48550/arxiv.2401.01313
            <br></br>
            <br></br>
            Shi, W., Han, X., Lewis, M., Tsvetkov, Y., Zettlemoyer, L., & Yih,
            S. W. (2023). Trusting your evidence: Hallucinate less with
            context-aware decoding. Ithaca: Cornell University Library,
            arXiv.org. https://doi.org/10.48550/arxiv.2305.14739
            <br></br>
            <br></br>
            Spillner, L. (2024). Unexpected Gender Stereotypes in AI-generated
            Stories: Hairdressers Are Female, but so Are Doctors.
            <br></br>
            <br></br>
            Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L.,
            Gomez, A. N., ... & Polosukhin, I. (2017). Attention is all you
            need. Advances in neural information processing systems, 30.
            <br></br>
            <br></br>
            White, J., Fu, Q., Hays, S., Sandborn, M., Olea, C., Gilbert, H.,
            Elnashar, A., Spencer-Smith, J., & Schmidt, D. C. (2023). A prompt
            pattern catalog to enhance prompt engineering with ChatGPT. Ithaca:
            Cornell University Library, arXiv.org.
            https://doi.org/10.48550/arxiv.2302.11382
            <br></br>
            <br></br>
            Wu, X., Zhao, H., Zhu, Y., Shi, Y., Yang, F., Liu, T., Zhai, X.,
            Yao, W., Li, J., Du, M., & Liu, N. (2024). Usable XAI: 10 strategies
            towards exploiting explainability in the LLM era. Ithaca: Cornell
            University Library, arXiv.org.
            https://doi.org/10.48550/arxiv.2403.08946
            <br></br>
            <br></br>
            Xu, Z., Liu, Z., Chen, B., Tang, Y., Wang, J., Zhou, K., Hu, X., &
            Shrivastava, A. (2023). Compress, then prompt: Improving
            accuracy-efficiency trade-off of LLM inference with transferable
            prompt. Ithaca: Cornell University Library, arXiv.org.
            https://doi.org/10.48550/arxiv.2305.11186
            <br></br>
            <br></br>
            Zhang, Z., Meng, F., Chen, L., Namazi-Rad, M., & Wang, J. (2023).
            How do large language models capture the ever-changing world
            knowledge? A review of recent advances. (). Ithaca: Cornell
            University Library, arXiv.org.
            https://doi.org/10.48550/arxiv.2310.07343
          </p>
        </div>
      </section>
    );
  }
}

export default Hallucination;
